import styles from "../styles/Navbar.module.css";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/stacklycode__logo.svg";

export default function Navbarmenu() {
  return (
    <div className={styles.navbar}>
      <img src={Logo} alt={"logo"} className={styles.logo} />
      <Link to="/dashboard" className={styles.fa_home}>
        <FaHome />
        <p className={styles.home__text}>INICIO</p>
      </Link>
      <Link to="/courses" className={styles.fa_graduation}>
        <FaGraduationCap />
        <p className={styles.courses__text}>CURSOS</p>
      </Link>
      <Link to="/messages" className={styles.fa_envelop}>
        <FaEnvelope />
        <p className={styles.messages__text}>MENSAJES</p>
      </Link>
      <Link to="/info" className={styles.fa_info_circle}>
        <FaInfoCircle />
        <p className={styles.info__text}>INFO</p>
      </Link>
    </div>
  );
}
