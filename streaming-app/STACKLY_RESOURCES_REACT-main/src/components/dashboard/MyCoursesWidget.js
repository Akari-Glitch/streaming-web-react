import styles from "../../styles/Dashboard.module.css";
import CourseWidget from "./CourseWidget";
import GetCourses from "../../services/GetCourses";

export default function MyCoursesWidget() {
  const { data, isLoading } = GetCourses();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className={styles.my__courses}>
      <h2>MIS CURSOS</h2>
      <div className={styles.my__courses__filter}>
        <p>Todos</p>
        <p>Nuevos</p>
        <p>Populares</p>
      </div>
      <div className={styles.my__courses__list}>
        {data?.map((course) => (
          <CourseWidget
            key={course.id}
            title={course.name}
            thumbnail={course.thumbnail_url}
            author={course.user.username}
            duration="1h 30m"
          />
        ))}
      </div>
    </section>
  );
}
