import Info from "./Info"
import About from "./About"
import './styles/App.css'


const App = () => {
  return (
    <>
      <div className="app--container">
        <Info />
        <About />
      </div>
    </>
  )
}

export default App;