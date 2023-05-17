import './styles/Footer.css'
import fbSvg from './assets/facebook.svg'
import igSvg from './assets/ig.svg'
import linkSvg from './assets/linkedin.svg'
import twtSvg from './assets/tw.svg'

const Footer = () => {
  return (
    <div className="footer">
      <img src={fbSvg} alt="facebook"/>
      <img src={igSvg} alt="facebook"/>
      <img src={linkSvg} alt="facebook"/>
      <img src={twtSvg} alt="facebook"/>
    </div>
  )
}

export default Footer;