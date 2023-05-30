import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        
            <div className="navDiv">
                <NavLink to="/" activeClassName="selected">Home</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/portfolio" >Portfolio</NavLink>
            </div>
        
    )
}