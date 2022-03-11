import Navbarmenu from "components/Navbarmenu";
import React from "react";
import styles from "../styles/Profile.module.css";
import Avatar from "@material-ui/core/Avatar";
import CustomInput from "components/inputs/CustomInput";
import Grid from "@material-ui/core/Grid";
import DiscordButton from "components/inputs/DiscordButton";
import SaveButton from "components/inputs/SaveButton";
import { useUserData } from "services/GetUserData";
import { useDiscordurl } from "services/Discord";
import LoadingScreen from "components/LoadingScreen";

export default function Profile({ user_data }) {
  const { data: discord_url, isLoading: isLoadingDiscord } = useDiscordurl();
  const { data: user, isLoading } = useUserData(user_data.id);
  if (isLoading || isLoadingDiscord) return <LoadingScreen />;
  return (
    <div className={styles.app__container}>
      <Navbarmenu />
      <div className={styles.container}>
        <div className={styles.profile__avatar}>
          <Avatar
            style={{ height: "200px", width: "200px" }}
            alt="profile"
            src={user_data.avatar}
          >
            {user_data.username[0]}
          </Avatar>
        </div>
        <div className={styles.profile__form}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <CustomInput
                key={"username"}
                text={"Nombre de Usuario"}
                value={user.username}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                text={"Nombres"}
                key={"first_name"}
                value={user.first_name}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                text={"Apellidos"}
                key={"last_name"}
                value={user.last_name}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput text={"Email"} key={"email"} value={user.email} />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                text={"Discord ID"}
                key={"discord_id"}
                value={user.discord_id || "No Verificado"}
                read={true}
              />
            </Grid>
            <Grid item xs={12}>
              <a className={styles.links} href={discord_url}>
                <DiscordButton />
              </a>
            </Grid>
          </Grid>
        </div>
        <div className={styles.save__btn__container}>
          <SaveButton />
        </div>
      </div>
    </div>
  );
}
