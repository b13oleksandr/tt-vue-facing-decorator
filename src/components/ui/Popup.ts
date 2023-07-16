import { Component, Vue, Prop, Model } from 'vue-facing-decorator'
import render from './popupRender'

@Component({
  render
})
export default class Popup extends Vue{
  @Prop() content: () => any = () => {}
  @Model() valueAgent: boolean = false
}
