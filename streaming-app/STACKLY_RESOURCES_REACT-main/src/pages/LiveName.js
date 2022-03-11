import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/LiveName.module.css";
import Button from "@material-ui/core/Button";
import Logo from "../assets/svg/stacklycode__logo.svg";
import { useHistory } from "react-router-dom";

export default function LiveName() {
  let history = useHistory();
  return (
    <div className={styles.app__container}>
      <div className={styles.container}>
        <div className={styles.form__contaniner}>
          <img src={Logo} alt={"logo"} className={styles.logo} />
          <div className={styles.username}>
            <TextField
              id="username"
              variant="outlined"
              label="Username"
              fullWidth
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => {
              history.push(
                `live?name=${
                  document.getElementById("username").value
                }&workshop=StacklyCode`
              );
            }}
          >
            ENTRAR
          </Button>
        </div>
      </div>
    </div>
  );
}
