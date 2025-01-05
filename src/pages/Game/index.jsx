import TheKeys from "../../components/TheKeys";
import GoBackButton from "../../components/GoBackButton";
//import soundKeys from "../../data/soundKeys";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { useContext } from "react";
import { KeyNotesContext } from "../../context/KeyNotesContext";
import styles from './Game.module.css';

function Game() {

    const { playRandomNote, gameState, resetGame } = useContext(KeyNotesContext);

    return (
        <div className={styles.game}>
            <GoBackButton page='/'  />
            <div>
                SoundWave
            </div>
            <div>
                <button onClick={playRandomNote}>TOCAR</button>
                { gameState === 'Win' || gameState === 'Lose' ?
                    <span className={styles.reset_icon} onClick={resetGame}>
                        <BsArrowCounterclockwise />
                    </span>
                    :
                    null
                }
            </div>

            { gameState === 'Normal' || gameState === 'Playing' ? 
                <p>Qual a nota tocada?</p>
                : 
                null
            }

            { gameState === 'Win' && <p style={{ color: 'var(--green)' }}>ACERTOU!</p> }

            { gameState === 'Lose' && <p style={{ color: 'var(--red)' }}>ERROU :/</p> }
            <TheKeys gameOn={true}/>
        </div>
    )
}

export default Game;