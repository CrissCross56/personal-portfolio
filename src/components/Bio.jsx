import styles from "../CSS/test.module.css"
import pic from "../assets/grant.jpg"
import resume from "../assets/GrantResume.pdf"
export default function Bio(){
    return(
        <div>
            <img src={pic} className={styles.img} alt="Grant"/>
            <p className={styles.bio}>Hi, I'm Grant Terdoslavich, an NYC dev. With knowledge of webdev fundamentals, such as HTML,CSS,JS, and frameworks like React, I aim to create interactive user experiences with my work. Here's my <a href={resume}>resume</a>.  If you want to shoot me a message, you can send me an email at grant.terdoslavich@gmail.com or check me out at the social links below.</p>
        </div>
    )
}