import { useQuery } from "react-query";
import axios from "config/api";

export default function GetCourses() {
  return useQuery(
    "course-data",
    () => axios(`api/courses`).then((res) => res.data),
    { retry: 0 }
  );
}
