import Form from "@/components/TheConfirmForm/TheConfirmForm"
import Popup from "@/components/ui/Popup"
import Btn from "@/components/ui/Btn"

export default function confirmFormRender(this: Form) {
  return <Popup v-model={this.showForm} content={() =>
    <div>
      <p class={'title mb-6'}>Confirm</p>
      <div>
        <Btn label={'Confirm'} onClick={this.onConfirm} full-width />
      </div>
    </div>
  }/>
}
