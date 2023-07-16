import type Component from '@/components/ui/Popup';

export default function containerRender(this: Component) {
  return this.valueAgent && (<div class={'popup'}>
    <div class={'popup__backdrop'} />

    <div class={'popup__window'}>
      <div class={'popup__close'}>
        <svg onClick={() => {this.valueAgent = false}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" fill="white"/>
        </svg>
      </div>
      {this.content()}
    </div>
  </div>)
}