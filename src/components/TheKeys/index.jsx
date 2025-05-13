/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./TheKeys.module.css";
import { KeyNotesContext } from "../../context/KeyNotesContext";

const TheKeys = ({ gameOn }) => {

    const { playKey, checkAnswer } = useContext(KeyNotesContext);

    return (
        <div className={styles.keys_container} data-testid="keys">
            <span
            className={styles.keys} 
            onClick={() => gameOn ? checkAnswer('DÓ') : playKey('DÓ')}>
                DÓ
            </span>

            <span 
            className={styles.keys}
            onClick={() => gameOn ? checkAnswer('RÉ') : playKey('RÉ')}>
                RÉ
            </span>

            <span 
            className={styles.keys} 
            onClick={() => gameOn ? checkAnswer('MI') : playKey('MI')}>
                MI
            </span>

            <span 
            className={styles.keys} 
            onClick={() => gameOn ? checkAnswer('FA') : playKey('FA')}>
                FA
            </span>

            <span 
            className={styles.keys} 
            onClick={() => gameOn ? checkAnswer('SOL') : playKey('SOL')}>
                SOL
            </span>

            <span 
            className={styles.keys} 
            onClick={() => gameOn ? checkAnswer('LA') : playKey('LA')}>
                LA
            </span>

            <span 
            className={styles.keys} 
            onClick={() => gameOn ? checkAnswer('SÍ') : playKey('SÍ')}>
                SÍ
            </span>
        </div>
    )
}

export default TheKeys;