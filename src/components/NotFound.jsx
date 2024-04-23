import '../styles/NotFound.css'
import "../styles/Container.css";


export default function NotFound() {
  return (
    <section className="notFound container">
    <div data-js="astro" className="astronaut">
    <div className="head"></div>
    <div className="arm arm-left"></div>
    <div className="arm arm-right"></div>
    <div className="body">
      <div className="panel"></div>
    </div>
    <div className="leg leg-left"></div>
    <div className="leg leg-right"></div>
    <div className="schoolbag"></div>
    </div>
    <div className="notfound_title"> 
      <h1> 404 </h1>
      <h3> OOPS! Page Not Found </h3>
    </div>
    <a className="back_btn" href="https://iakhmedov-ia.web.app/" title="Home page">Go to Home</a>
    </section>
    
  )
}
