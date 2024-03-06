import styles from "../CSS/test.module.css"
import {motion} from 'framer-motion'
// import hangman from "../assets/hangmanProj.png"
export default function Project(props){
    return(
            
            <div className={styles.project}>
                {/* more to come later*/}
                <div className={styles.scream}>
                <a href={props.domain}><motion.img initial={{x:"-100vw"}} animate={{x:0}} transition={{stiffness:0}} whileHover={{scale:1.1}} src={props.photo} className={styles.photo} alt="project"></motion.img></a>

                </div>
                <motion.p  initial={{x:"100vw"}} animate={{x:0}} transition={{stiffness:0}}  className={styles.description}>{props.description}</motion.p>
                <motion.ul className={styles.projectList} initial={{x:"100vw"}} animate={{x:0}} transition={{stiffness:0}} >
                    <li className={styles.projectLink}>Hosted Domain: <a href={props.domain}>{props.domain}</a></li>
                    <li className={styles.projectLink}>Github Repo: <a href={props.repo}>{props.repo}</a></li>
                </motion.ul>
                <motion.p initial={{x:"100vw"}} animate={{x:0}} transition={{stiffness:0}}  className={styles.description}>Date Completed: {props.date}</motion.p>
            </div>
           
         
           
        
    )
}