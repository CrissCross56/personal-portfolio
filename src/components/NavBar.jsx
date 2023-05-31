import { NavLink } from "react-router-dom";
import styles from '../CSS/test.module.css'

export default function NavBar(){
    return(
        
            <div className={styles.navdiv}>
                <div className={styles.links}>
                    <NavLink  to="/" >Home</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                    <NavLink  to="/portfolio" >Portfolio</NavLink>
                </div>
                
            </div>
        
    )
}