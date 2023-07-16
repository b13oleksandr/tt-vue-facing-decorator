import Component from '@/components/ui/Card'
import Btn from '@/components/ui/Btn'

export default function cardRender(this: Component) {
  return <div class={'card'}>
    <div class={'card__content'}>
      <div class={'card__content-inner'}>
        <p class={'card__title'}>{this.title}</p>
        <p class={'card__desc'}>{this.desc}</p>

        <div class={'card__meta'}>
          <div>{this.author}</div>
          <div>{this.date}</div>
        </div>

        {
          this.showTools && (
            <div class={'card__tools'}>
              <Btn label={'Edit'} onClick={this.onEdit}/>
              <Btn label={'Delete'} onClick={this.onDelete}/>
            </div>
          )
        }
      </div>
    </div>
  </div>
}
