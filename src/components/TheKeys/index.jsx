import styles from "./TheKeys.module.css";
import DO from "../../assets/do.mp3";
import RE from "../../assets/re.mp3";
import MI from "../../assets/mi.mp3";
import FA from "../../assets/fa.mp3";
import SOL from "../../assets/sol.mp3";
import LA from "../../assets/la.mp3";
import TI from "../../assets/ti.mp3";

const soundKeys = [
    {
        keyName: 'DÓ',
        audio: DO
    }
]

const TheKeys = () => {

    const playKey = (key) => {
        new Audio(key).play();
    }

    return (
        <div className={styles.keys_container}>
            <span 
            className={styles.keys} 
            onClick={() => playKey(DO)}>
                DÓ
            </span>

            <span 
            className={styles.keys}
            onClick={() => playKey(RE)}>
                RÉ
            </span>

            <span 
            className={styles.keys} 
            onClick={() => playKey(MI)}>
                MI
            </span>

            <span 
            className={styles.keys} 
            onClick={() => playKey(FA)}>
                FA
            </span>

            <span 
            className={styles.keys} 
            onClick={() => playKey(SOL)}>
                SOL
            </span>

            <span 
            className={styles.keys} 
            onClick={() => playKey(LA)}>
                LA
            </span>

            <span 
            className={styles.keys} 
            onClick={() => playKey(TI)}>
                SÍ
            </span>
        </div>
    )
}

export default TheKeys;