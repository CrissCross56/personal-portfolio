//import the navbar and the footer
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Project from "../components/Project"
import hangman from "../assets/hangmanProj.png"
import digimon from "../assets/digimonProj.png"
export default function Portfolio(){
    const hangmanDomain = 'https://classroomhangman.netlify.app/';
    const digimonDomain = 'https://banana-bunch-digi-deck.netlify.app/';
    const hangmanRepo = 'https://github.com/CrissCross56/Front-End-Game'; 
    const digimonRepo = '';
    return(
        <div>
            <Project description={'My first project at General assembly, a game of hangman.'} domain={hangmanDomain} repo={hangmanRepo} photo={hangman}/>
        </div>
    )
}