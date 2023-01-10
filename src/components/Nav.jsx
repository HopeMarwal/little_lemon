//img
import Logo from '../assets/img/Logo.svg'

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <a href='/'>
          <img src={Logo} alt="little_lemon" />
        </a>
      </div>
    </nav>
  )
}
