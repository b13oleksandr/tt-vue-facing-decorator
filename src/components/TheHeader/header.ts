import render from '@/components/TheHeader/headerRender'
import { Component, Vue, } from 'vue-facing-decorator'
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'

@Component({
  render
})
export default class App extends Vue {
  authStore = useAuthStore()
  userStore = useUserStore()

  onLogin() {
    this.authStore.setFormLoginPosition(true)
  }
  onRegister() {
    this.authStore.setFormRegisterPosition(true)
  }

  onLogout() {
    this.userStore.setUser(null)
  }

  get isAuthenticated() {
    return this.authStore.isAuthenticated
  }
}
