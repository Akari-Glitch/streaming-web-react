import styles from "../../styles/Dashboard.module.css";
import { ReactComponent as Character } from "../../assets/svg/character.svg";
export default function WelcomeWidget({ user_data }) {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcome__text}>
        <h2>Hola {user_data?.username}!</h2>
        <p>Que bueno verte de nuevo!</p>
      </div>
      <div className={styles.character__container}>
        <Character className={styles.character} />
      </div>
    </section>
  );
}
