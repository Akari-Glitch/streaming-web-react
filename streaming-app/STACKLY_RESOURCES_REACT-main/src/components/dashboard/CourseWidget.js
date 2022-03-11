import styles from "../../styles/Dashboard.module.css";
import Button from "@material-ui/core/Button";
import { FaPlayCircle } from "@react-icons/all-files/fa/FaPlayCircle";
export default function CourseWidget({ title, thumbnail, author }) {
  return (
    <div className={styles.my__courses__course}>
      <div className={styles.my__course__and__text}>
        <img
          className={styles.my__course__thumbnail}
          src={thumbnail}
          alt="test"
        ></img>
        <div className={styles.my__course__text}>
          <h2>{title}</h2>
          <p>by {author}</p>
        </div>
        <div className={styles.my_course__duration}></div>
      </div>
      <span className={styles.view__btn}>
        <Button
          className={styles.btn__test}
          variant="contained"
          color="secondary"
        >
          <FaPlayCircle className={styles.fa__play__circle} />
        </Button>
      </span>
    </div>
  );
}
