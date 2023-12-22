import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import AboutMe from './screens/AboutMe';
import Portfolio from './screens/Portfolio';
// import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Socials from './components/Socials';
import styles from './CSS/Main.css'
function App() {
  return (
    <div className={styles.pseudoBody}>
      {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      {/* <Footer/> */}
      <Socials/>
    </div>
   
   
  );
}

export default App;
