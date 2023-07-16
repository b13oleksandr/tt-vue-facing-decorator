import Form from '@/components/TheLoginForm/TheLoginForm'
import Popup from '@/components/ui/Popup'
import TextField from '@/components/ui/TextField'
import Btn from '@/components/ui/Btn'

export default function loginFormRender(this: Form) {
  return <Popup v-model={this.showForm} content={() =>
    <div>
      <div class={'mb-6'}>
        <TextField v-model={this.login} label={'Login'} />
      </div>
      <div class={'mb-8'}>
        <TextField v-model={this.password} label={'Password'} />
      </div>

      <div>
        <Btn label={'Login'} onClick={this.onLogin} full-width />
      </div>
    </div>
  }/>
}
