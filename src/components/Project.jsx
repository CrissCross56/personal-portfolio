import { motion } from "framer-motion";
import styles from "../CSS/test.module.css"
export default function Project(){
    return(
        <motion.div>
            <p><span className={styles.text}> My first porject at General assembly, a game of hangman <a href="https://classroomhangman.netlify.app/">https://classroomhangman.netlify.app/</a></span></p>
            <p><span>The first group porject I worked on at General Assembly, a deck builder website where users can build <a href="https://banana-bunch-digi-deck.netlify.app/cardsets"></a></span></p>
        </motion.div>
    )
}