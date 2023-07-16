import type Component from '@/components/ui/Btn'

export default function containerRender(this: Component) {
  return <button class={['button', this.fullWidth && 'button--full-width']}>
    {this.label}
  </button>
}