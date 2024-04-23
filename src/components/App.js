// import { Routes, Route} from 'react-router-dom'
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import NotFound from "./NotFound";
import "../styles/Media.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// export default function App() {
//   return (
//       <>

//       {/* <ProgressBar/>
//       <Header/>
//       <About/>
//       <Skills/>
//       <Projects/>
//       <Footer/> */}
//       </>
//   );
// }

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDDY00cEBnd_X5Dsf89IdhAzVGd1eaQMOE",
    authDomain: "iakhmedov-ia.firebaseapp.com",
    projectId: "iakhmedov-ia",
    storageBucket: "iakhmedov-ia.appspot.com",
    messagingSenderId: "950970841777",
    appId: "1:950970841777:web:359b59113cf859d4d2c090",
    measurementId: "G-K5L54HZSEE"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



  const renderComponent = () => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case '/':
        return (
          <>
            <ProgressBar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
          </>
        )
      default:
        return <NotFound />
    }
  }
  return renderComponent();
}