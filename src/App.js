import './App.css';
import Home from './Pages/Home/Home';
import LeftMenu from './Pages/Shared/LeftMenu/LeftMenu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Service from './Pages/Service/Service';
import PORTFOLIO from './Pages/PORTFOLIO/PORTFOLIO';
import ContactForm from './Pages/CONTACT/ContactForm';
import CONTACT from './Pages/CONTACT/CONTACT';
import Biography from './Pages/Biography/Biography';
import IBNSINA from './Pages/ProjectList/IBNSINA/IBNSINA';
import DJI from './Pages/ProjectList/DJI/DJI';
import Food from './Pages/ProjectList/Food/Food';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
       <Router>
         <LeftMenu></LeftMenu>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="service" element={<Service />} />
      <Route path="/portfolio" element={<PORTFOLIO />} />
      <Route path="/contact" element={<CONTACT />} />
      <Route path="/biography" element={<Biography />} />
      <Route path="/ibnsina" element={<IBNSINA />} />
      <Route path="/dji" element={<DJI />} />
      <Route path="/food" element={<Food />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
      {/* <LeftMenu></LeftMenu>
      <Home></Home> */}
      
    </div>
  );
}

export default App;
