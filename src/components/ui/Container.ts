import { Component, Vue, Prop } from 'vue-facing-decorator'
import render from './containerRender'

@Component({
  render
})
export default class Container extends Vue{
  @Prop()
  content: () => any = () => {}
}
