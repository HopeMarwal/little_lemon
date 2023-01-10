import '../assets/scss/reviewCard.scss';

export default function ReviewCard({item}) {
  return (
    <div className='review_card'>
      <img src={item.img} alt={item.name} />
      <span className='name'>{item.name}</span>
      <p className='rating'>{item.rating}</p>
      <p className="text">{item.text}</p>
    </div>
  )
}
