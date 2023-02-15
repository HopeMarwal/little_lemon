//Style
import '../assets/scss/reviewCard.scss';
//Image
import rating from '../assets/img/Star_rating.png'

export default function ReviewCard({item}) {
  return (
    <div className='review_card'>
      {/* Photo */}
      <img className='photo' src={item.img} alt={item.name} />
      <p className='name'>{item.name}</p>
      {/* Rating */}
      <div className="rating">
        <img src={rating} alt="five_star_rating" />
      </div>
      <p className="text">{item.text}</p>
    </div>
  )
}
