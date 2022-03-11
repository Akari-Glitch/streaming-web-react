import styles from "../../styles/Dashboard.module.css";
export default function CoursesProgressWidget() {
  return (
    <section className={styles.courses__progress__section}>
      <div className={styles.courses__progress}>
        <div className={styles.courses__completed}>
          <h2>11</h2>
          <p>
            Cursos <span className={styles.jump__line}>completos</span>
          </p>
        </div>
        <div className={styles.courses__in__progress}>
          <h2>4</h2>
          <p>
            Cursos <span className={styles.jump__line}>en progreso</span>
          </p>
        </div>
      </div>
    </section>
  );
}
