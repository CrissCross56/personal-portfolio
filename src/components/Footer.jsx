import styles from '../CSS/test.module.css'
export default function Footer(){
    return(
        <div className={styles.footer}>
            <a href="https://www.linkedin.com/in/grant-terdoslavich-363134127/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/CrissCross56"><i class="fa-brands fa-github"></i></a>
            <p className={styles.text}>2023 ©</p>
        </div>
    )
}