import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import AboutMe from './screens/AboutMe';
import Portfolio from './screens/Portfolio';
// import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProfSocials from './components/ProfSocials';
import styles from './CSS/Main.css'
import Bars from './components/bars';
import Nav from './components/Nav';
function App() {
  return (
    <div className={styles.pseudoBody}>
      {/* <NavBar/> */}
       {/* <ProfSocials/>
       <Bars/> */}
       <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      {/* <Footer/> */}
    </div>
   
   
  );
}

export default App;
