import Button from "./Button"
//img
import Image from '../assets/img/restauranfood.jpg'
//style
import '../assets/scss/header.scss'


export default function Header() {
  return (
    <header>
      <section>

        <div className="container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet sagittis risus, quis volutpat lorem euismod sed.</p>
          <Button>Reserve a table</Button>
        </div>
        
        <div className='img'>
          <img src={Image} alt="restaurant_food_little_lemon" />
        </div>

      </section>
    </header>
  )
}
