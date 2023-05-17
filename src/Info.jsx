import image from './assets/photo.png'
import './styles/Info.css'

const Info = () => {
  return (
    <div className="info">
      <img src={image} className='info--photo-img' alt='photo'/>
      <h2 className="info--name">Laura Smith</h2>
      <h3 className="info--title">Front End Developer</h3>
      <h4 className='info--email'>LauraSmith@code.com</h4>
      <button className='info--button'>Email</button>
    </div> 
  )
}

export default Info;