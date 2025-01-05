import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import MusicalNote from "/musical-note.png";

function Home() {
    return (
        <main className={styles.home}>
            <img src={MusicalNote} alt="Imagem de uma nota musical" />
            <h1 className={styles.title}>ABSOLUTE</h1>
            <div className={styles.buttons_container}>
                <div>
                    <Link to='/tutorial'>
                        <button className={styles.btn1}>TUTORIAL</button>
                    </Link>
                    <Link to='/key_notes'>
                        <button className={styles.btn1}>AS NOTAS</button>
                    </Link>
                </div>
                <div>
                    <button className={styles.btn2}>JOGAR</button>
                </div>
            </div>
        </main>
    )
}

export default Home;