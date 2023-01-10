//img
import Logo from '../assets/img/Logo.svg'
//style
import '../assets/scss/nav.scss'

export default function Nav() {
  return (
    <nav>

      <div className="logo">
        <img src={Logo} alt="little_lemon" />
      </div>

      <ul>
        <li><a href='/'>home</a></li>
        <li><a href='/about'>about</a></li>
        <li><a href='/menu'>menu</a></li>
        <li><a href='/reservation'>reservation</a></li>
        <li><a href='/order'>order online</a></li>
        <li><a href='/login'>login</a></li>
      </ul>

    </nav>
  )
}
