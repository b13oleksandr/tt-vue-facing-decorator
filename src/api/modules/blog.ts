// @ts-ignore
import postsJson from '@/mock/posts.json'
import type { Post } from '@/types'

export class Blog {
  posts = postsJson

  private setPostsToLocalStorage() {
    if (!localStorage.getItem('posts')?.length) {
      localStorage.setItem('posts', JSON.stringify(this.posts))
    }
  }

  async getAll(): Promise<Post[]> {
    this.setPostsToLocalStorage()

    const posts = JSON.parse(localStorage.getItem('posts') || '[]')

    return new Promise(r => {
      r(posts)
    })
  }

  async getById(id: number): Promise<Post> {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')

    const post = posts.find(((p: Post) => p.id === id))

    return new Promise(r => {
      r(post)
    })
  }

  async create(post: Post): Promise<Post> {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')

    const newPost = {
      ...post,
      id: new Date().valueOf(),
      date: new Date().toLocaleDateString(),
    }

    posts.unshift(newPost)
    localStorage.setItem('posts', JSON.stringify(posts))

    return newPost
  }

  async update(post: Post) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')

    const pi = posts.findIndex((p: Post) => p.id === post.id)

    if (pi > -1) {
      posts[pi] = {
        ...posts[pi],
        title: post.title,
        text: post.text
      }
    }

    localStorage.setItem('posts', JSON.stringify(posts))
  }

  async delete(id: number): Promise<void> {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')

    localStorage.setItem('posts', JSON.stringify(posts.filter((p: Post) => p.id !== id)))
  }
}