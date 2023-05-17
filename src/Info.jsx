import image from './assets/photo.png'
import './styles/Info.css'

const Info = () => {
  return (
    <div className="info">
      <img src={image} className='info--photo-img' alt='photo'/>
      <h1 className="info--name">Laura Smith</h1>
      <h4 className="info--title">Front End Developer</h4>
      <h6 className='info--email'>LauraSmith@code.com</h6>
      <button className='info--button'>Email</button>
    </div> 
  )
}

export default Info;