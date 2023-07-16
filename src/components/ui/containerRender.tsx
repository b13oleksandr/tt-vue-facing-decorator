import type Component from '@/components/ui/Container';

export default function containerRender(this: Component) {
  return <div class={'container'}>
    {this.content()}
  </div>
}