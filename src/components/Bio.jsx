import styles from "../CSS/test.module.css"
import resume from "../assets/GrantResume.pdf"
import {motion} from 'framer-motion'
import { NavLink } from "react-router-dom";
//link to portfolio image goes here
const profilePic = 'https://i.imgur.com/H2Ta1Ci.jpg';
export default function Bio(){
    return(
        <div>
            {/* <motion.img initial={{x:"-100vw"}} animate={{x:0}} transition={{stiffness:0}} src={profilePic} className={styles.img} alt="Grant"/> */}
            <motion.p initial={{opacity:0, x: "100vw"}} animate={{opacity:[0.2,0.4,0.6,0.8,1], x:0}} transition={{stiffness:0}} className={styles.bio}>            <motion.img initial={{x:"-100vw"}} animate={{x:0}} transition={{stiffness:0}} src={profilePic} className={styles.img} alt="Grant"/>
            Hi there! I'm Grant Terdoslavich, an NYC-based developer with a passion for crafting engaging online experiences. Armed with a solid foundation in web development fundamentals like HTML, CSS, and JavaScript, along with experience in frameworks like React, I strive to elevate digital interactions through my work. In my pursuit of creating delightful user experiences, I bring to the table methodical and persistent problem-solving skills, honed through years of object-oriented programming. Drawing inspiration from my experience running a Kendo club in college, effective communication is at the core of my approach.
            Explore my professional journey further by checking out my projects in my portfolio, or send me an <a href="grant.terdoslavich@gmail.com">email</a>.</motion.p>
            
            <div className={styles.container}>
            <NavLink to="/portfolio">
                <motion.button 
                initial={{x:"-100vw"}} animate={{x:0}}
                whileHover={{
                scale:1.1,
                boxShadow: "0px 0px 8px rgb(255,255,255)"
                }} className={styles.buttonNav}>Portfolio</motion.button>
            </NavLink>
            </div>
     
        </div>
    )
}