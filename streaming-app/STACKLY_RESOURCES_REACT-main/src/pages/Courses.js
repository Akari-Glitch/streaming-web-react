import styles from "../styles/Courses.module.css";
import Navbarmenu from "../components/Navbarmenu";
import UserBar from "../components/dashboard/UserBar";
import Videos from "../components/courses/Videos";
import GetCourses from "../services/GetCourses";
import LoadingScreen from "components/LoadingScreen";
import { Redirect } from "react-router-dom";

export default function Courses({ user_data }) {
  const { data: courses, isLoading } = GetCourses();

  if (isLoading) return <LoadingScreen />;
  if (!courses) return <Redirect to="/404" />;
  return (
    <div className={styles.app__container}>
      <Navbarmenu />
      <div className={styles.container}>
        <section className={styles.user__bar__section}>
          <UserBar user_data={user_data} />
        </section>

        <section className={styles.video__list}>
          {courses?.map((course) => {
            return (
              <Videos
                key={course.id}
                id={course.id}
                title={course.name}
                username={course.user.username}
                thumbnail={course.thumbnail_url}
                avatar={course.user.avatar_url}
                date={course.createdAt}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}
