import type App from '@/App'
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader/header'
import TheLoginForm from '@/components/TheLoginForm/TheLoginForm'
import TheRegisterForm from '@/components/TheRegisterForm/TheRegisterForm'
import TheConfirmForm from '@/components/TheConfirmForm/TheConfirmForm'

export default function render(this: App) {
  return <div>
    <TheHeader />
    <RouterView />

    <TheLoginForm />
    <TheRegisterForm />

    <TheConfirmForm />
  </div>
}
