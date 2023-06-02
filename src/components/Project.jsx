import { motion } from "framer-motion";
import styles from "../CSS/test.module.css"
import digimon from "../assets/digimonProj.png"
// import hangman from "../assets/hangmanProj.png"
export default function Project(props){
    return(
        <div>
            <div className={styles.project}>
                <img src={props.photo} className={styles.hangmanImg}></img>
                <p>{props.description}</p>
                <ul>
                    <li>Hosted Domain: <a href={props.domain}>{props.domain}</a></li>
                    <li>Github Repo: <a href={props.repo}>{props.repo}</a></li>
                </ul>
            </div>
           
           {/* <div className={styles.project}>
            <img src={digimon} className={styles.digimonImg}></img>
                <p>The first group project I worked on at General Assembly, a deck builder website where users can build decks for the trading card game, Digimon</p>
                <ul>
                    <li>Hosted Domain: <a href="https://banana-bunch-digi-deck.netlify.app/cardsets">https://banana-bunch-digi-deck.netlify.app/cardsets</a></li>
                    <li>Github Repo: <a href=""></a></li>
                </ul> 
           </div> */}
           
        </div>
    )
}