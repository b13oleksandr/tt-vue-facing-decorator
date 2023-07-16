import { Component, Vue, Prop } from 'vue-facing-decorator'
import render from './cardRender'

@Component({
  render
})
export default class Card extends Vue {
  @Prop() title!: string
  @Prop() desc!: string
  @Prop() img!: string
  @Prop() date!: string
  @Prop() author!: string
  @Prop() showTools!: string
  @Prop() onEdit: () => any = () => {}
  @Prop() onDelete: () => any = () => {}
}