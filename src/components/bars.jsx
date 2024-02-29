import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styles from "../CSS/test.module.css"
import ReactModal from "react-modal"
export default function Bars(){

    const [burgerState, setBurger] = useState(false)

    function showMenu(){
        setBurger(!burgerState);
    }

    return(
        <div>
        <motion.svg className={styles.bars} xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">q  a<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></motion.svg>
        {/* // have a field of text somewhere here that tells the user where they are
        //field of text should change when they use the hamburger menu to change page/route on site

        //use a modal to be the burger menu for out project */}
        <ReactModal
        isOpen={burgerState} ariaHideApp={false}
        >

        </ReactModal>
        </div>
    )
}