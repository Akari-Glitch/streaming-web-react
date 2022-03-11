import CoursesProgressWidget from "../components/dashboard/CoursesProgressWidget";
import Chart from "../components/dashboard/Chart";
import LearnMore from "../components/dashboard/LearnMore";
import MyCoursesWidget from "../components/dashboard/MyCoursesWidget";
import UserBar from "../components/dashboard/UserBar";
import WelcomeWidget from "../components/dashboard/WelcomeWidget";
import Navbarmenu from "../components/Navbarmenu";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard({ user_data }) {
  return (
    <>
      <div className={styles.app__container}>
        <Navbarmenu />
        <div className={styles.container}>
          <div className={styles.dashboard__container__left}>
            <WelcomeWidget username="prueba" user_data={user_data} />
            <CoursesProgressWidget />
            <Chart />
          </div>
          <section className={styles.user__bar__section}>
            <UserBar user_data={user_data} />
          </section>
          <div className={styles.dashboard__container__right}>
            <MyCoursesWidget />
            <LearnMore />
          </div>
        </div>
      </div>
    </>
  );
}
