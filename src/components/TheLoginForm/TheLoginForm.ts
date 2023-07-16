import { Component, Vue } from 'vue-facing-decorator'
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'
import { api } from '@/api'
import render from '@/components/TheLoginForm/loginFormRender'

@Component({
  render
})
export default class App extends Vue {
  store = useAuthStore()
  userStore = useUserStore()
  api = api()

  login: string = 'johndoe'
  password: string = 'password1'

  get showForm() {
   return this.store.formLoginPosition
  }
  set showForm(value) {
    this.store.setFormLoginPosition(value)
  }

  async onLogin() {
    try {
      const user = await this.api.auth.login(this.login, this.password)
      this.userStore.setUser(user)
      this.store.setFormLoginPosition(false)
    } catch (e) {
      console.error(e)
    }
  }
}
