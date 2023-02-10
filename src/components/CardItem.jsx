//style
import '../assets/scss/cardItem.scss';
//icon
import icon from '../assets/img/delivery_icon.png'

export default function CardItem({item}) {
  return (
    <div className='card-item'>
      {/* Img container */}
      <div className="img">
        <img src={item.img} alt={item.title} />
      </div>
      {/* Info container */}
      <div className="info">
        <p className="title">{item.title}</p>
        <p className="price">$ {item.price}</p>
        <p className="desc">{item.desc}</p>
        <button className="delivery">Order a delivery</button>
        <img className='icon' src={icon} alt="delivery_icon" />
      </div>
    </div>
  )
}
