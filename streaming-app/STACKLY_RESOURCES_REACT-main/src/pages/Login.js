import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import StacklyLogo from "../assets/svg/stackly__logo.svg";
import styles from "../styles/Login.module.css";
import { useForm } from "react-hook-form";
import { UseLogin } from "../services/Auth";
const useStyles = makeStyles((theme) => ({
  multilineColor: {
    color: "#ffffff",
  },
  grilla: {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    gap: "1rem",
    alignContent: "center",
    margin: "0 auto",
    height: "100%",
  },
  notchedOutline: {
    borderWidth: "1.5px",
    borderColor: "#ffffff !important",
  },
}));

export default function Login() {
  const classes = useStyles();
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const { mutateAsync: login } = UseLogin();
  const onSubmit = async (values) => {
    try {
      await login(values);
      await history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form__container}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.login__form}
          >
            <div className={classes.grilla}>
              <img src={StacklyLogo} alt={"logo"}></img>
              <TextField
                label="Usuario"
                variant="outlined"
                InputProps={{
                  className: classes.multilineColor,
                  spellCheck: "false",
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                  inputRef: register,
                  name: "username",
                  type: "text",
                }}
                InputLabelProps={{
                  style: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    width: "100%",
                    color: "#ffffff",
                    fontWeight: 500,
                  },
                }}
              />
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                InputProps={{
                  className: classes.multilineColor,
                  spellCheck: "false",
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                  inputRef: register,
                  name: "password",
                  type: "password",
                }}
                InputLabelProps={{
                  style: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    width: "100%",
                    color: "#ffffff",
                    fontWeight: 500,
                  },
                }}
              />
              <Button
                className={styles.login__btn}
                variant="contained"
                color="secondary"
                type="submit"
              >
                ENTRAR
              </Button>
              <Link to="/register" className={styles.links}>
                <p className={styles.create__account}>¿No tienes cuenta?</p>
              </Link>

              <Link to="/forgot" className={styles.links}>
                <p className={styles.forgot__password}>
                  ¿Has olvidado tu contraseña?
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
