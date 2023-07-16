import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {
  const posts: Ref<any[]> = ref([])

  function setPosts(list: any[]): void {
    posts.value = list
  }

  return { posts, setPosts }
})
