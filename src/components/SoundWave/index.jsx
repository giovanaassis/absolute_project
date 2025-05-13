/* eslint-disable react/prop-types */
import styles from "./SoundWave.module.css";

const SoundWave = ({ active }) => {

    return (
        <div className={styles.wave_container} data-testid="soundWave">
            <span className={`${styles.stroke} ${active && styles.wave}`}></span>
            <span className={`${styles.stroke} ${active && styles.wave}`}></span>
            <span className={`${styles.stroke} ${active && styles.wave}`}></span>
            <span className={`${styles.stroke} ${active && styles.wave}`}></span>
            <span className={`${styles.stroke} ${active && styles.wave}`}></span>
            <span className={`${styles.stroke} ${active && styles.wave}`}></span>
            <span className={`${styles.stroke} ${active && styles.wave}`}></span>
        </div>
    )
}

export default SoundWave;