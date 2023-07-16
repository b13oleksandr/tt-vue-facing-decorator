import render from '@/components/home/render'
import { Component, Vue, Setup } from 'vue-facing-decorator'
import { useBlogStore } from '@/stores/blog'
import { api } from '@/api'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'
import { useConfirmForm } from '@/stores/confirmForm'
import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import type { Router } from 'vue-router'
import type { Post } from '@/types'
import '@fancyapps/ui/dist/carousel/carousel.css'

@Component({
  render: render
})
export default class App extends Vue {
  // @ts-ignore
  @Setup(()=>useRouter())
  router!: Router

  api  = api()
  blogStore = useBlogStore()
  userStore = useUserStore()
  authStore = useAuthStore()
  confirmFormStore = useConfirmForm()

  get items(): Post[] {
    return this.blogStore.posts
  }

  get isAuthenticated() {
    return this.authStore.isAuthenticated
  }

  get user() {
    return this.userStore.user
  }

  onNewPost() {
    this.router.push({ path: '/post' })
  }

  onDeletePost(id: number) {
    this.confirmFormStore.setPosition(true, async () => {
      await this.api.blog.delete(id)
      this.blogStore.setPosts(
        this.blogStore.posts.filter((p) => p.id !== id)
      )
    })
  }

  async mounted() {
    const posts = await this.api.blog.getAll()
    this.blogStore.setPosts(posts)

    const container = document.getElementById("myCarousel");
    const options = { infinite: false };

    new Carousel(container, options);
  }
}
