import { Component, Vue, Prop, Model } from 'vue-facing-decorator'
import render from './textFieldRender'

@Component({
  render
})
export default class Btn extends Vue {
  @Prop() label: string = ''
  @Prop() multiline: boolean = false
  @Model() valueAgent: string = ''
}
