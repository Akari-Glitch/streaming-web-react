import styles from "../styles/Error404.module.css";
import Button from "@material-ui/core/Button";
export default function Error404() {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.sub__title}>¡La página que buscas no existe!</p>
      <Button
        className={styles.home__btn}
        variant="contained"
        color="secondary"
        type="submit"
      >
        INICIO
      </Button>
    </div>
  );
}
