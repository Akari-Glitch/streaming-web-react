import { useQuery } from "react-query";
import axios from "config/api";

export const getUserData = (id, config) =>
  axios.get(`api/users/find/${id}`, config).then((res) => res.data);

export function useUserData(id) {
  return useQuery(["user-data", id], () => getUserData(id));
}
