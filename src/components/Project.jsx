import styles from "../CSS/test.module.css"
// import hangman from "../assets/hangmanProj.png"
export default function Project(props){
    return(
            
            <div className={styles.project}>
                {/* more to come later*/}
                <img src={props.photo} className={styles.photo} alt="project"></img>
                <p className={styles.description}>{props.description}</p>
                <ul>
                    <li>Hosted Domain: <a href={props.domain}>{props.domain}</a></li>
                    <li>Github Repo: <a href={props.repo}>{props.repo}</a></li>
                </ul>
            </div>
           
         
           
        
    )
}