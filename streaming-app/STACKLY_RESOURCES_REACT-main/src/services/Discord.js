import { useQuery } from "react-query";
import axios from "config/api";

export const getDiscordurl = (config, username) =>
  axios
    .get(`/api/getdiscordurl?username=fluxusgaming`, config)
    .then((res) => res.data);

export function useDiscordurl() {
  return useQuery("discord", () => getDiscordurl());
}
