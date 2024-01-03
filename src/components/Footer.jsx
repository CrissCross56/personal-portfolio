import styles from '../CSS/test.module.css'
import {motion} from 'framer-motion'
import ProfSocials from './ProfSocials'
export default function Footer(){
    return(
        <div className={styles.footer}>
            {/* going to need some new component to stre the icons to move them */}
            <ProfSocials></ProfSocials>
            {/* <motion.a href="https://github.com/CrissCross56"><i class="fa-brands fa-github"></i></motion.a> */}
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className={styles.text}>2023 ©</motion.p>
        </div>
    )
}