import { useQuery } from "react-query";
import axios from "config/api";

export const getCourse = (name, config) =>
  axios.get(`/api/courses?name=${name}`, config).then((res) => res.data[0]);

export function useCourse(name) {
  return useQuery(["courses", name], () => getCourse(name));
}
