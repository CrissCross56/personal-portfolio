import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import AboutMe from './screens/AboutMe';
import Portfolio from './screens/Portfolio';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import styles from './CSS/Main.css'
import navStyle from './CSS/NavBar.css'
function App() {
  return (
    <>
    <NavBar styles={navStyle}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
