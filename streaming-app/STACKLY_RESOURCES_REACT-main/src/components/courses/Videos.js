import styles from "../../styles/Courses.module.css";
import Avatar from "@material-ui/core/Avatar";
import { FaComments } from "@react-icons/all-files/fa/FaComments";
import { FaCoins } from "@react-icons/all-files/fa/FaCoins";
import { FaExclamationTriangle } from "@react-icons/all-files/fa/FaExclamationTriangle";
import { FaShareAlt } from "@react-icons/all-files/fa/FaShareAlt";
import Tooltip from "@material-ui/core/Tooltip";
import VideoMenu from "../../components/courses/VideoMenu";
import moment from "moment";
import { Link } from "react-router-dom";

export default function Videos({
  id,
  title,
  thumbnail,
  username,
  avatar,
  date,
}) {
  return (
    <div className={styles.video__container}>
      <div className={styles.video__user}>
        <Avatar
          style={{ height: "50px", width: "50px" }}
          alt="profile"
          src={avatar}
        >
          {username[0]}
        </Avatar>
        <div className={styles.video__username__and__details}>
          <h3>{username}</h3>
          <p>{moment(date, "YYYYMMDD").fromNow()}</p>
        </div>
        <VideoMenu />
      </div>
      <Link to={`/course/${title}`} className={styles.video__links}>
        <img
          className={styles.video__thumbnail}
          src={thumbnail}
          alt={"video_thumbnail"}
        ></img>
        <h2 className={styles.video__title}>{title}</h2>
      </Link>
      <div className={styles.actions__bar}>
        <Tooltip title="Comentarios" placement="bottom">
          <button className={styles.comments__btn}>
            <FaComments className={styles.comments} />
          </button>
        </Tooltip>
        <Tooltip title="Coins" placement="bottom">
          <button className={styles.coins__btn}>
            <FaCoins />
            <p>0.03</p>
          </button>
        </Tooltip>
        <Tooltip title="Reportar" placement="bottom">
          <button className={styles.report__btn}>
            <FaExclamationTriangle className={styles.report} />
          </button>
        </Tooltip>
        <Tooltip title="Compartir" placement="bottom">
          <button className={styles.share__btn}>
            <FaShareAlt className={styles.share} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
