import { Line } from "react-chartjs-2";
import styles from "../../styles/Dashboard.module.css";
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const data = {
  labels: ["lun", "mar", "mie", "jue", "vie", "sab", "dom"],
  datasets: [
    {
      label: "Horas",
      data: [
        getRndInteger(0, 7),
        getRndInteger(0, 7),
        getRndInteger(0, 7),
        getRndInteger(0, 7),
        getRndInteger(0, 7),
        getRndInteger(0, 7),
        getRndInteger(0, 7),
      ],
      fill: false,
      backgroundColor: "rgb(0, 0, 0)",
      borderColor: "rgba(0, 0, 0)",
    },
  ],
};

const options = {
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <section className={styles.chart__section}>
      <h2>Tus Estadísticas</h2>
      <span className={styles.chart__filter}>
        <p>Horas de Aprendizaje</p>
      </span>
      <Line data={data} options={options} />
    </section>
  </>
);

export default LineChart;
