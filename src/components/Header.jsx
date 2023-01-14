//img
import Image from '../assets/img/restauranfood.jpg'
//style
import '../assets/scss/header.scss'
//router
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header>
      <section>

        <div className="container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet sagittis risus, quis volutpat lorem euismod sed.</p>
          <Link className="btn" to='/booking'>Reserve a table</Link>
        </div>
        <div className='img'>
          <img src={Image} alt="restaurant_food_little_lemon" />
        </div>

      </section>
    </header>
  )
}
