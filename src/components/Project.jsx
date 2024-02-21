import styles from "../CSS/test.module.css"
import {motion} from 'framer-motion'
// import hangman from "../assets/hangmanProj.png"
export default function Project(props){
    return(
            
            <div className={styles.project}>
                {/* more to come later*/}
               <a href={props.domain}><motion.img initial={{x:"-100vw"}} animate={{x:0}} transition={{stiffness:0}} whileHover={{scale:1.1}} src={props.photo} className={styles.photo} alt="project"></motion.img></a>
                <motion.p  initial={{x:"100vw"}} animate={{x:0}} transition={{stiffness:0}}  className={styles.description}>{props.description}</motion.p>
                <motion.ul initial={{x:"100vw"}} animate={{x:0}} transition={{stiffness:0}} src={props.photo}>
                    <li>Hosted Domain: <a href={props.domain}>{props.domain}</a></li>
                    <li>Github Repo: <a href={props.repo}>{props.repo}</a></li>
                </motion.ul>
                <motion.p initial={{x:"100vw"}} animate={{x:0}} transition={{stiffness:0}}  className={styles.description}>Date Completed: {props.date}</motion.p>
            </div>
           
         
           
        
    )
}