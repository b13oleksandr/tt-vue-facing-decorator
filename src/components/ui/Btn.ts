import { Component, Vue, Prop } from 'vue-facing-decorator'
import render from './btnRender'

@Component({
  render
})
export default class Btn extends Vue{
  @Prop() label: string = ''
  @Prop() fullWidth: boolean = false
}
