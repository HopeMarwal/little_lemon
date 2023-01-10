//style
import '../assets/scss/cardItem.scss';
//icon
import icon from '../assets/img/delivery_icon.png'

export default function CardItem({item}) {
  return (
    <div className='card-item'>
      <div className="img">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="info">
        <p className="title">{item.title}</p>
        <p className="price">$ {item.price}</p>
        <p className="desc">{item.desc}</p>
        <p className="delivery">Order a delivery</p>
        <img className='icon' src={icon} alt="delivery_icon" />
      </div>
    </div>
  )
}
