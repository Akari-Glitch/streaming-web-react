import { useQuery } from "react-query";
import axios from "config/api";

export const getCourseVideo = (name, id, config) =>
  axios
    .get(`/api/course-video?name=${name}&video=${id} `, config)
    .then((res) => res.data);

export function useCourseVideo(name, id) {
  return useQuery(["course-video", name, id], () => getCourseVideo(name, id));
}
