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
    function toggleChevron(txt){
        if(txt === ">"){
            return(<motion.svg initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}  whileHover={{scale:1.1}}  xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 600 600" onClick={togglePath} className={styles.svg}><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></motion.svg>)
        }
        else if(txt === "<"){
            return(<motion.svg initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}  whileHover={{scale:1.1}}  xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 600 600" onClick={togglePath} className={styles.svg}><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></motion.svg>)
        }
    }
    return(
        <div>
             <NavLink to={`${path}`}>
                {toggleChevron(innerTxt)}
                {/* <motion.button 
                // initial={{x:"-100vw"}} animate={{x:0}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                whileHover={{
                scale:1.1,
                // boxShadow: "0px 0px 8px rgb(255,255,255)"
                }} className={styles.buttonNav} onClick={togglePath}>{innerTxt}</motion.button> */}
            </NavLink>
        </div>
    )
}