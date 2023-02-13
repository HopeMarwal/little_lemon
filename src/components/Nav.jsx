//img
import Logo from '../assets/img/Logo.svg'
//icon
import Icon from '../assets/img/icon_hamburger_menu.svg'
//style
import '../assets/scss/nav.scss'
//react
import { useState } from 'react'
//router
import { NavLink } from 'react-router-dom'


export default function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav>
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="little_lemon" />
      </div>

      <div className='burger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={Icon} alt="menu" />
      </div>

      <div
        onClick={() => setIsMenuOpen(false)}
        className={isMenuOpen ? 'show list_wrapper' : 'hide list_wrapper'}
      >
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><a href='/about'>about</a></li>
          <li><a href='/menu'>menu</a></li>
          <li><NavLink to='/booking'>reservation</NavLink></li>
          <li><a href='/order'>order online</a></li>
          <li><a href='/login'>login</a></li>
        </ul>
      </div>

    </nav>
  )
}
