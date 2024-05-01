import {motion} from 'framer-motion'
import styles from "../CSS/Project.module.css"
export default function ProjectImage(props){
    return(
        <div>
            <div>
                <a href={props.domain}>
                    <motion.img initial={{x:"-100vw"}} animate={{x:0}} transition={{stiffness:0}} whileHover={{scale:1.1}} src={props.photo} className={styles.photo} alt="project"></motion.img>
                </a>
            </div>
        </div>
    )
}