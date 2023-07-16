import {Component, Vue,} from 'vue-facing-decorator'
import render from '@/components/TheConfirmForm/confirmFormRender'
import {useConfirmForm} from "@/stores/confirmForm";

@Component({
  render
})
export default class App extends Vue {
  store = useConfirmForm()
  get showForm() {
   return this.store.position
  }
  set showForm(value) {
    this.store.setPosition(value)
  }

  async onConfirm() {
    this.store.confirm()
    this.store.setPosition(false)
  }
}
