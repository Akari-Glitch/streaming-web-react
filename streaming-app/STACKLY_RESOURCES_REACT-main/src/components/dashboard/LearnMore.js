import styles from "../../styles/Dashboard.module.css";
import Button from "@material-ui/core/Button";
import { ReactComponent as BookBrain } from "../../assets/svg/book__brain.svg";

export default function LearnMore() {
  return (
    <section className={styles.learn__more}>
      <span className={styles.learn__more__text}>
        <h2>Aprende mucho más!</h2>
        <p>Desbloquea cursos generando StacklyPoints!</p>
        <span className={styles.learn__more__btn}>
          <Button variant="contained" color="secondary">
            StacklyPoints
          </Button>
        </span>
      </span>
      <BookBrain />
    </section>
  );
}
