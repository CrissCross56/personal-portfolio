import { motion } from "framer-motion";
import styles from "../CSS/test.module.css"

export default function Project(){
    return(
        <div>
            <div className={styles.project}>
                <img></img>
                <p>My first project at General assembly, a game of hangman <a href="https://classroomhangman.netlify.app/">https://classroomhangman.netlify.app/</a></p>
            </div>
           
           <div className={styles.project}>
            <img></img>
                <p>The first group project I worked on at General Assembly, a deck builder website where users can build decks for the trading card game, Digimon. <a href="https://banana-bunch-digi-deck.netlify.app/cardsets">https://banana-bunch-digi-deck.netlify.app/cardsets</a></p>
           </div>
           
        </div>
    )
}