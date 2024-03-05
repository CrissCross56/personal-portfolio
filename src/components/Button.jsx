import styles from "../CSS/test.module.css"
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion'
import { useState } from "react";

export default function Button({path, togglePath, innerTxt}){
    // const [path, setPath] = useState("/portfolio")
    // const [innerTxt, setTxt] = useState(">")
    // function  togglePath(){
    //     //check to see what the current path is, if its portfolio, change the path back to the homescreen, and vice versa
    //     if(path === "/portfolio"){
    //         setPath("/")
            
    //     }
    //     else if(path === "/"){
    //         setPath("/portfolio")
    //     }
    //     //also change the text of the button
    //     if(innerTxt === ">"){
    //         setTxt("<")
    //     }
    //     else if(innerTxt === "<"){
    //         setTxt(">")
    //     }
    // }
    //className={styles.container}>
    return(
        <div>
             <NavLink to={`${path}`}>
                <motion.button 
                // initial={{x:"-100vw"}} animate={{x:0}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                whileHover={{
                scale:1.1,
                // boxShadow: "0px 0px 8px rgb(255,255,255)"
                }} className={styles.buttonNav} onClick={togglePath}>{innerTxt}</motion.button>
            </NavLink>
        </div>
    )
}