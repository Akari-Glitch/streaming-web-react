import { Link, Redirect, useParams } from "react-router-dom";
import UserBar from "components/dashboard/UserBar";
import Navbarmenu from "components/Navbarmenu";
import { ReactComponent as Leftarrow } from "assets/svg/left__arrow.svg";
import { ReactComponent as Rightarrow } from "assets/svg/right__arrow.svg";
import { useCourseVideo } from "services/GetCourseVideo";
import styles from "../styles/Video.module.css";
import LoadingScreen from "components/LoadingScreen";

export default function Video({ user_data }) {
  const { name, id } = useParams();
  const { data: course, isLoading } = useCourseVideo(name, id);
  if (isLoading) return <LoadingScreen />;
  if (course.error) return <Redirect to="/courses" />;

  return (
    <>
      <div className={styles.app__container}>
        <Navbarmenu />
        <div className={styles.container}>
          <section className={styles.user__bar__section}>
            <UserBar user_data={user_data} />
          </section>
          <div className={styles.video__container}>
            <div className={styles.video__player}>
              <iframe
                title={course}
                width="auto"
                height="30rem"
                src={course?.video_actual.video_url}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.video__description}>
              <div className={styles.video__title__and__arrows}>
                <h2>{course?.video_actual.title}</h2>
                <span className={styles.video__arrows}>
                  <Leftarrow className={styles.left__arrow} />
                  <Rightarrow className={styles.right__arrow} />
                </span>
              </div>
              <p>{course?.video_actual.description}</p>
            </div>
          </div>
          <div className={styles.video__course__content}>
            <h2> CURSO | {course?.course.name}</h2>
            <p>CONTENIDOS</p>
            <div className={styles.video__course__list}>
              {course?.videos.map((videos_data) => (
                <Link
                  to={`/course/${name}/video/${videos_data.id}`}
                  className={styles.link}
                >
                  <div className={styles.video__card}>
                    <img
                      className={styles.video__thumbnail}
                      src={videos_data?.video_thumbnail}
                      alt="video thumbnail"
                    />
                    <div className={styles.video__card__text}>
                      <h2>{videos_data?.title}</h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
