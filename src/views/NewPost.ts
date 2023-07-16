import render from '@/components/newPost/render'
import { Component, Setup, Vue } from 'vue-facing-decorator'
import { useRoute, useRouter} from 'vue-router'
import { api } from '@/api'
import { useUserStore } from '@/stores/user'
import type { Router } from 'vue-router'
import type {Post} from '@/types'

@Component({
  render
})
export default class App extends Vue {
  // @ts-ignore
  @Setup(() => useRouter())
  router!: Router

  userStore = useUserStore()

  // @ts-ignore
  @Setup(()=>useRoute())
  route: any
  api  = api()
  post: Post = {
    id: null,
    title: '',
    text: '',
    author: '',
    createdBy: null,
    date: ''
  }

  get postId() {
    return +this.route.params.id
  }

  async onSave() {
    !this.postId
      ? await this.api.blog.create({
        ...this.post,
        author: this.userStore.user?.name || '',
        createdBy: this.userStore.user?.id || null
      })
      : await this.api.blog.update(this.post)

    await this.router.push({ path: '/' })
  }

  async mounted() {
    if (this.postId) {
      this.post = await this.api.blog.getById(this.postId)
    }
  }
}
