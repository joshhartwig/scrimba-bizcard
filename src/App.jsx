import Info from "./Info"
import About from "./About"
import Footer from "./Footer"

import './styles/App.css'


const App = () => {
  return (
    <>
      <div className="container">
        <Info />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App;