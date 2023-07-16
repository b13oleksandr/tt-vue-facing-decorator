import render from '@/components/TheRegisterForm/registerFormRender'
import { Component, Vue } from 'vue-facing-decorator'
import { useAuthStore } from '@/stores/auth'
import { api } from '@/api'

@Component({
  render
})
export default class App extends Vue {
  store = useAuthStore()
  api = api()

  name: string = ''
  login: string = ''
  password: string = ''

  get showForm() {
   return this.store.formRegisterPosition
  }
  set showForm(value) {
    this.store.setFormRegisterPosition(value)
  }

  async onRegister() {
    try {
      await this.api.auth.register(this.name, this.login, this.password)
      this.store.setFormRegisterPosition(false)
    } catch (e) {
      console.error(e)
    }
  }
}
