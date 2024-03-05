import { useState, useEffect } from "react";
import {motion} from 'framer-motion'
import styles from '../CSS/test.module.css'
import Button from './Button'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from "react-router-dom";
import ProfSocials from "./ProfSocials";
import Bars from "./bars";
export default function Nav(){

    //since theres only two pages the user can go to, set the default value of  to false, adn flip it to its opposite value whenever the user goes to another page
    // const [locationState, setLocation] = useState(false)

    const [burgerLabel, setBurgerLabel] = useState('Portfolio')
    const [pageLabel, setPageLAbel] = useState('About Me')

    const [path, setPath] = useState("/portfolio")
    const [innerTxt, setTxt] = useState(">")



    const togglePath = () =>{
         //check to see what the current path is, if its portfolio, change the path back to the homescreen, and vice versa
         if(path === "/portfolio"){
            setPath("/")
            
        }
        else if(path === "/"){
            setPath("/portfolio")
        }

        //also change the text of the button
        if(innerTxt === ">"){
            setTxt("<")
        }
        else if(innerTxt === "<"){
            setTxt(">")
        }

        //make changes to the burger menu and its label
        if(burgerLabel === 'About Me'){
            setBurgerLabel('Portfolio')
            setPageLAbel("About Me")
        }
        else if(burgerLabel === "Portfolio"){
            setBurgerLabel('About Me')
            setPageLAbel('Portfolio')
        }
    }

    return(
        <div>
            <ProfSocials path={path}  togglePath={togglePath} innerTxt={innerTxt}></ProfSocials>

            <Bars path={path} togglePath={togglePath} burgerLabel={burgerLabel} pageLabel={pageLabel}></Bars>

        </div>
    )
}