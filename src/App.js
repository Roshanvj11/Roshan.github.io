import { Routes, Route} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Footer from "./pages/Footer";
import "./App.css"
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element = {<About/>}/>
        <Route path="/skills" element = {<Skills/>}/>
        <Route path="/education" element = {<Education/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
