import Loading from "./loading";
import styles from "../styles/Loading.module.css";
export default function LoadingScreen() {
  return (
    <div className={styles.loading__background}>
      <Loading />
    </div>
  );
}
