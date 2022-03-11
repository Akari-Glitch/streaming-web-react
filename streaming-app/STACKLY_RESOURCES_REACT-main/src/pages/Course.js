import styles from "styles/Course.module.css";
import Navbarmenu from "components/Navbarmenu";
import UserBar from "components/dashboard/UserBar";
import BuyButton from "components/courses/BuyButton";
import ContentAccordion from "components/courses/ContentAccordion";
import { VscEllipsis } from "@react-icons/all-files/vsc/VscEllipsis";
import Avatar from "@material-ui/core/Avatar";
import { Redirect, useParams } from "react-router-dom";
import { useCourse } from "services/GetCourse";
import LoadingScreen from "components/LoadingScreen";

export default function Course({ user_data }) {
  const { name } = useParams();
  const { data: course, isLoading } = useCourse(name);
  if (isLoading) return <LoadingScreen />;
  if (course.error) return <Redirect to="/404" />;

  return (
    <div className={styles.app__container}>
      <Navbarmenu />
      <div className={styles.container}>
        <section className={styles.user__bar__section}>
          <UserBar user_data={user_data} />
        </section>
        <section className={styles.course__container}>
          <div className={styles.course__title}>
            <h1>{course?.name}</h1>
            <p>{course?.description}</p>
          </div>
          <div className={styles.course__card}>
            <div className={styles.course__user}>
              <Avatar
                style={{ height: "50px", width: "50px" }}
                alt="profile"
                src={course?.user.avatar_url}
              >
                {course?.user.username[0]}
              </Avatar>

              <div className={styles.course__username__and__details}>
                <h3>{course?.user.username}</h3>
                <p>hace 1 dia</p>
              </div>
              <VscEllipsis className={styles.video__more} />
            </div>
            <div className={styles.course__description}>
              <img
                className={styles.video__thumbnail}
                src={course?.thumbnail_url}
                alt={"course_thumbnail"}
              ></img>
              <p className={styles.course__lifetime_access}>
                Acceso de por vida
              </p>
              <div className={styles.course__buy}>
                <p className={styles.course__buy__price}>{course?.price}</p>
                <p className={styles.course__currency}>USD</p>
              </div>
              <BuyButton link="." />
            </div>
          </div>
          <div className={styles.course__description__content}>
            <div className={styles.course__requirements}>
              <h4>
                Duración {course?.duration} - {course?.lessons} lecciones
              </h4>
              <h2>Requisitos</h2>
              <p>
                Solo necesitas un computador para ver las clases con cualquier
                sistema operativo (Windows, Mac, Linux), aquí aprenderás desde
                instalar los programas necesarios, hasta tener tu primer
                aplicación web en el navegador y compartirlo con el mundo.
              </p>
            </div>
            <div className={styles.course__learn}>
              <h2>¿Qué Aprenderás?</h2>
              <p>
                Este curso inicia tu carrera como desarrollador web, aprenderás
                a configurar tu entorno de trabajo incluyendo el uso profesional
                de Google Chrome, Visual Studio Code y las bases de Github para
                desplegar el proyecto. El proyecto estará creado completamente
                en HTML y CSS, también aprenderás técnicas básicas y avanzadas
                para estructurar cualquier proyecto, y aplicar el conjunto de
                atributos HTML y propiedades CSS de manera profesional. Este
                curso no se queda con el uso típico de estos lenguajes, si ya
                sabes algo de HTML y CSS aprenderás técnicas creativas y si no
                sabes nada este curso es el inicio de tu carrera con el pie
                derecho.
              </p>
            </div>
            <div className={styles.course__content}>
              <h2>Contenido del Curso</h2>
              <ContentAccordion />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
