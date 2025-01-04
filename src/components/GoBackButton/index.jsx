/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./GoBackButton.module.css";

const GoBackButton = ({ page }) => {
    return (
        <Link to={page} >
            <FaArrowLeft className={styles.btn}/>
        </Link>
    )
}

export default GoBackButton;