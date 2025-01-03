import styles from "./Home.module.css";
import MusicalNote from "/musical-note.png";

function Home() {
    return (
        <main className={styles.home}>
            <img src={MusicalNote} alt="Imagem de uma nota musical" />
            <h1 className={styles.title}>ABSOLUTE</h1>
            <div className={styles.buttons_container}>
                <button className={styles.btn1}>TUTORIAL</button>
                <button className={styles.btn1}>AS NOTAS</button> 
                <button className={styles.btn2}>JOGAR</button>
            </div>
        </main>
    )
}

export default Home;