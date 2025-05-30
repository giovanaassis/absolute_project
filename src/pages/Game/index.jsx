import TheKeys from "../../components/TheKeys";
import GoBackButton from "../../components/GoBackButton";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { useContext } from "react";
import { KeyNotesContext } from "../../context/KeyNotesContext";
import styles from "./Game.module.css";
import SoundWave from "../../components/SoundWave";
import { SoundWaveContext } from "../../context/SoundWaveContext";

function Game() {
  const { playRandomNote, gameState, resetGame, count } =
    useContext(KeyNotesContext);
  const { waveState, activeWave } = useContext(SoundWaveContext);

  return (
    <div className={styles.game}>
      <GoBackButton page="/" />
      <div>
        <SoundWave active={waveState} />{" "}
        {/* estilização para as ondas sonoras */}
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            playRandomNote();
            activeWave();
          }}
          className={`${count === 3 && styles.gameOver}`}
        >
          TOCAR
        </button>

        {gameState === "Win" || gameState === "Lose" ? (
          <span className={styles.reset_icon} onClick={resetGame} aria-label="arrowCounterIcon">
            <BsArrowCounterclockwise />
          </span>
        ) : null}
      </div>

      {gameState === "Normal" || gameState === "Playing" ? (
        <p>Qual a nota tocada?</p>
      ) : null}

      {gameState === "Win" && (
        <p style={{ color: "var(--green)" }} data-testid="result_message">
          ACERTOU!
        </p>
      )}

      {gameState === "Lose" && (
        <p style={{ color: "var(--red)" }} data-testid="result_message">
          ERROU :/
        </p>
      )}
      <TheKeys gameOn={true} />
    </div>
  );
}

export default Game;