import TheKeys from "../../components/TheKeys";
import GoBackButton from "../../components/GoBackButton";
import styles from "./KeyNotes.module.css";

function KeyNotes() {
    return (
        <div className={styles.key_notes}>
            <GoBackButton page='/' />
            <p>Clique nas notas para escutar seu som:</p>
            <TheKeys gameOn={false} />
        </div>
    )
}

export default KeyNotes;