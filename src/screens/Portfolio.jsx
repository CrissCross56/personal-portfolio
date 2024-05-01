//import the navbar and the footer
import { NavLink } from "react-router-dom"
import Project from "../components/Project"

import styles from "../CSS/test.module.css"
import {motion} from 'framer-motion'
export default function Portfolio(){
    const hangmanDomain = 'https://classroomhangman.netlify.app/';
    const digimonDomain = 'https://banana-bunch-digi-deck.netlify.app/';
    const hangmanRepo = 'https://github.com/CrissCross56/Front-End-Game'; 
    const digimonRepo = 'https://github.com/ChelseyReann/digimon-deck';
    const calcRepo = "https://github.com/CrissCross56/Calculator";
    const calcDomain = "https://bootstrap-calculator.vercel.app";
    const choaRepo = "https://github.com/DaveKobrin/choa_npo_redo";
    const choaDomain = "https://choa-npo-redo-agrimes23.vercel.app";
    //have the links for the image urls below here
    const calcPhoto = 'https://i.imgur.com/NflhtS7.png';
    const digimonPhoto = 'https://i.imgur.com/8D1JJd1.png';
    const hangmanPhoto = 'https://i.imgur.com/jWdE5n6.png';
    const choaPhoto = "https://i.imgur.com/IA7SmNN.png"
    return(
        <div className={styles.portfolio}>
            <Project description={'My first project at General assembly, a game of hangman.'} domain={hangmanDomain} repo={hangmanRepo} photo={hangmanPhoto} date={"Mar 30, 2023"}/>
            <Project className={styles.digiProj} description={'The first group project I worked on at G.A. a deck builder where users can build decks for the trading card game, Digimon.'} domain={digimonDomain} repo={digimonRepo} photo={digimonPhoto} date={"May 30, 2023"}></Project>
            <Project description={"My first project using bootstrap, to try and test my knowledge of bootstrap's responsive utility classes."} domain={calcDomain} repo={calcRepo} photo={calcPhoto} date={"Nov 1, 2023"}></Project>
            <Project description={"The result of a weeklong, in-house, hackathon, ran by GA for UI/UX and Software grads. I had to learn how to use Next.js on the fly. Our team won crowd favorite."} domain={choaDomain} repo = {choaRepo} photo={choaPhoto} date = {"December 8th, 2023"}/>

            {/* <div className={styles.container}>
                <NavLink to="/"><motion.button initial={{x:"-100vw"}} animate={{x:0}}
                 whileHover={{
                 scale:1.1,
                 boxShadow: "0px 0px 8px rgb(255,255,255)"
                }} className={styles.buttonNav}>Home</motion.button></NavLink>
            </div> */}
        </div>
    )
}