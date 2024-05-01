import styles from "../CSS/Project.module.css"
import {motion} from 'framer-motion'
import ProjectImage from "./ProjectImage"
// import hangman from "../assets/hangmanProj.png"
export default function Project(props){
    return(
            
           <>
            <div className={styles.project}>
                
                <ProjectImage domain={props.domain} photo={props.photo}/>

                <div className={styles.projText}>
                    <motion.p className={styles.description} initial={{x:"100vw"}} animate={{x:0}} transition={{stiffness:0}}>
                    {props.description}</motion.p>
                    <motion.p  className={styles.endDate} initial={{x:"100vw"}} animate={{x:0}} transition={{stiffness:0}}  >Date Completed: {props.date}</motion.p>
                    <motion.ul className={styles.projectList} initial={{x:"100vw"}} animate={{x:0}} transition={{stiffness:0}} >
                        <li className={styles.projectLink}><a href={props.domain}>Hosted Domain</a></li>
                        <li className={styles.projectLink}><a href={props.repo}>Github Repo</a></li>
                    </motion.ul>
                </div>
            
            </div>
          
           </>
           
         
           
        
    )
}