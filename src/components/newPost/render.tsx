import Home from '@/views/NewPost'
import TextField from '@/components/ui/TextField'
import Btn from '@/components/ui/Btn'

export default function render(this: Home) {
  return <div class={'container'}>
    <div class={'mb-6'}>
      <TextField v-model={this.post.title} label={'Title'} />
    </div>
    <div class={'mb-6'}>
      <TextField v-model={this.post.text} label={'Text'} multiline />
    </div>

    <div>
      <Btn label={'Save'} onClick={this.onSave} />
    </div>
  </div>
}
