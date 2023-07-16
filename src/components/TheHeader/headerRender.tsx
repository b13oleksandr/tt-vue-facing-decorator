import Header from './header'
import Btn from '@/components/ui/Btn'
import router from "@/router";

export default function HeaderRender(this: Header) {
  return <header class={'header'}>
    <div class={'container'}>
      <div class={'header__inner'}>
        <div class={'header__logo'}>
          <span onClick={() => router.push({ path: '/' })}>
            TEST TASK
          </span>
        </div>
        {
          !this.isAuthenticated ? (
            <div class={'header__controls'}>
              <Btn label={'Login'} onClick={this.onLogin}/>
              <Btn label={'Register'} onClick={this.onRegister}/>
            </div>
          ) : (
            <div class={'header__controls'}>
              <Btn label={'Logout'} onClick={this.onLogout}/>
            </div>
          )
        }
      </div>
    </div>
  </header>
}
