import type Component from '@/components/ui/TextField'

export default function containerRender(this: Component) {
  return <div class={'text-field'}>
    <label class={'text-field__label'} for="">{this.label}</label>
    {
      !this.multiline
        ? <input class={'text-field__input'} v-model={this.valueAgent} type="text"/>
        : <textarea class={'text-field__input text-field__input--textarea'} v-model={this.valueAgent}/>
    }
  </div>
}
