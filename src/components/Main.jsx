import React from 'react'
//style
import '../assets/scss/main.scss'
//componenets
import Button from './Button';
//img
import specialOne from '../assets/img/greek_salad.jpg';
import specialTwo from '../assets/img/bruchetta.svg';
import specialThree from '../assets/img/lemon_dessert.jpg'
import MarioAndAdrianA from '../assets/img/restaurant_chef_B.jpg'
import MarioAndAdrianB from '../assets/img/Mario_and_Adrian_A.jpg'
import CardItem from './CardItem';
import ReviewCard from './ReviewCard';

export default function Main() {
  const specials = [
    {
      id: 1,
      title: "Greek salad",
      desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: 12.99,
      img: specialOne
    },
    {
      id: 2,
      title: "Bruscheta",
      desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
      price: 5.99,
      img: specialTwo
    },
    {
      id: 3,
      title: "Lemon dessert",
      desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: 5.01,
      img: specialThree
    },
    {
      id: 4,
      title: "Greek salad",
      desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: 12.99,
      img: specialOne
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Jonh',
      img: MarioAndAdrianA,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      name: 'Jonh',
      img: MarioAndAdrianA,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 3,
      name: 'Jonh',
      img: MarioAndAdrianA,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 4,
      name: 'Jonh',
      img: MarioAndAdrianA,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  return (
    <main>

      <section className="specials">
        <h1>This week specials!</h1>
        <Button>Online menu</Button>
        <div className="specials_items">
          {/* map over specials <CardItem /> */}
          {
            specials.map((item) => {
              return <CardItem key={item.id} item={item} />
            })
          }
        </div>
      </section>

      <section className="testimonials">
        <div className="testmonials_wrapper">
          <h1>Testimonials</h1>
          {/* map over testimonials <ReviewCard /> */}
          {
            testimonials.map((item) => {
              return (<ReviewCard key={item.id} item={item} />)
            })
          }
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repellat nobis aperiam voluptatem delectus cum dolorum recusandae magnam, itaque autem? Corporis magni enim iste similique repudiandae fuga eveniet deserunt incidunt.</p>
        </div>
        <div className='img'>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>
    </main>
  )
}
