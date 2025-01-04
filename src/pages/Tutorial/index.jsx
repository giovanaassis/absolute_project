import GoBackButton from "../../components/GoBackButton";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Tutorial.module.css";

function Tutorial() {
    return (
        <div className={styles.tutorial}>
            <GoBackButton page='/' />

            <h2>Sobre</h2>
            <p>
                Bem-vindo ao Absolute! <br />
                Este minijogo foi criado para todos os músicos que já sonharam em identificar um tom ou nota apenas ouvindo uma melodia, mas sempre sentiram frustração por não conseguir.
                
                Você sabia que algumas pessoas possuem o dom do &quot;ouvido absoluto&quot; (também conhecido como perfect pitch ou absolute pitch?) Pois bem, o Absolute foi feito para ajudá-lo a desenvolver essa habilidade de forma simples e divertida!
            </p>

            <h2>Como Jogar</h2>
            <p>
                Clique no botão TOCAR para ouvir uma nota da escala musical. Sua missão será identificá-la apenas usando o ouvido! Caso precise, você pode repetir o som até 3 vezes.
            </p>
            <footer className={styles.footer}>
                <p>Desenvolvido por Giovana de Assis</p>
                <i className={styles.icons}>
                    <FaLinkedin className={styles.linkedin_icon} />
                    <FaGithub />
                </i>
            </footer>
        </div>
    )
}

export default Tutorial;