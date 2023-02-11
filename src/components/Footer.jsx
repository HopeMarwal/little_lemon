import Logo from '../assets/img/logo_footer.png'
//style
import '../assets/scss/footer.scss'

export default function Footer() {
  return (
    <footer>

      <div className="footer_wrapper">
        {/* Logo container */}
        <div className='footer_logo'>
          <img src={Logo} alt="little_lemon_footer_logo" />
        </div>

        <div className='col'>
          <h4>Doormat navigation</h4>
          <ul>
            <li><a href='/'>home</a></li>
            <li><a href='/about'>about</a></li>
            <li><a href='/menu'>menu</a></li>
            <li><a href='/reservation'>reservation</a></li>
            <li><a href='/order'>order online</a></li>
            <li><a href='/login'>login</a></li>
          </ul>
        </div>

        <div className='col'>
          <h4>Contact</h4>
          <ul>
            <li>Address: Town, Street 001</li>
            <li>Phone: +1 000 000 000</li>
            <li>Email: example@email.com</li>
          </ul>
        </div>

        <div className='col'>
          <h4>Social Media Links</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagramm</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
     
    </footer>
  )
}
