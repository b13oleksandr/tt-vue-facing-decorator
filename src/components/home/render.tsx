import home from '@/views/HomeView'
import Card from '@/components/ui/Card'
import Btn from '@/components/ui/Btn'

export default function render(this: home) {
  return <div>
    <div class={'container'}>
      {
        this.isAuthenticated && (
          <div>
            <p class={'title mb-6'}>
              Hello, <span class={'title text-accent'}>{this.user?.name}</span>
            </p>
            <div class={'mb-6'}>
              <Btn label={'Create a new post'} full-width onClick={this.onNewPost}/>
            </div>
          </div>
        )
      }

      <div class={'mb-8'}>
        {this.items.map((item, index) => (
          <div class={'mb-6'} key={index}>
            <Card
              title={item.title}
              desc={item.text}
              date={item.date}
              author={item.author}
              showTools={this.isAuthenticated && item.createdBy === this.user?.id }
              onEdit={() => this.router.push({path: `/post/${item.id}`})}
              onDelete={() => this.onDeletePost(item.id)}
            />
          </div>
        ))}
      </div>

      <p class={'title mb-6'}>
        Fancyapps - <span class={'text-accent title'}>Carousel</span>
      </p>
      <div class="f-carousel" id="myCarousel">
        {this.items.map((item, index) => (
          <div class="f-carousel__slide">
            <Card
              title={item.title}
              desc={item.text}
              date={item.date}
              author={item.author}
              showTools={this.isAuthenticated && item.createdBy === this.user?.id }
              onEdit={() => this.router.push({path: `/post/${item.id}`})}
              onDelete={() => this.onDeletePost(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
}
