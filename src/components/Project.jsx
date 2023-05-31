import { motion } from "framer-motion";
import styles from "../CSS/test.module.css"
export default function Project(){
    return(
        <motion.div>
            <p className={styles.text}> My first project at General assembly, a game of hangman <a href="https://classroomhangman.netlify.app/">https://classroomhangman.netlify.app/</a></p>
            <p className={styles.text}>The first group project I worked on at General Assembly, a deck builder website where users can build decks for the trading card game, Digimon. <a href="https://banana-bunch-digi-deck.netlify.app/cardsets">https://banana-bunch-digi-deck.netlify.app/cardsets</a></p>
        </motion.div>
    )
}