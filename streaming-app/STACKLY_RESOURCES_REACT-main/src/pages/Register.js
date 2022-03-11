import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "../styles/Register.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as StacklyLogo } from "../assets/svg/stackly__logo.svg";
import { UseRegister } from "../services/Auth";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  multilineColor: {
    color: "#ffffff",
  },
  textfield_props: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    color: "#ffffff",
    fontWeight: 500,
  },
  grilla: {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    gap: "1rem",
    margin: "0 auto",
    height: "70%",
    "@media screen and (max-width: 780px)": {
      height: "90%",
    },
  },
  grilla__formularios: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    gap: "10px",
    rowGap: "8px",
    "@media screen and (max-width: 780px)": {
      gridTemplateColumns: "1fr",
    },
  },
  notchedOutline: {
    borderWidth: "1.5px",
    borderColor: "#ffffff !important",
  },
}));

export default function Register() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { mutateAsync: registerMutation } = UseRegister();

  const onSubmit = async (values) => {
    try {
      console.log(values);
      await registerMutation(values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className={styles.container} disableGutters maxWidth={false}>
      <div className={styles.form__container}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.login__form}
          noValidate
          autoComplete="off"
        >
          <div className={classes.grilla}>
            <StacklyLogo height={100} width={100} />
            <div className={classes.grilla__formularios}>
              <TextField
                label="Nombres"
                variant="outlined"
                InputProps={{
                  className: classes.multilineColor,
                  spellCheck: "false",
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                  name: "first_name",
                  inputRef: register,
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
                label="Apellidos"
                variant="outlined"
                InputProps={{
                  className: classes.multilineColor,
                  spellCheck: "false",
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                  name: "last_name",
                  inputRef: register,
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
                label="Usuario"
                variant="outlined"
                InputProps={{
                  className: classes.multilineColor,
                  spellCheck: "false",
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                  name: "username",
                  inputRef: register,
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
                label="Email"
                variant="outlined"
                InputProps={{
                  className: classes.multilineColor,
                  spellCheck: "false",
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                  name: "email",
                  inputRef: register,
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
                type="password"
                variant="outlined"
                InputProps={{
                  className: classes.multilineColor,
                  spellCheck: "false",
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                  name: "password",
                  inputRef: register,
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
                label="Confirmar Contraseña"
                type="password"
                variant="outlined"
                InputProps={{
                  className: classes.multilineColor,
                  spellCheck: "false",
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
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
            </div>
            <Button
              className={styles.login__btn}
              variant="contained"
              color="secondary"
              type="submit"
            >
              CREAR
            </Button>
            <a className={styles.already__account} href="./">
              <p>¿Ya tienes cuenta?</p>
            </a>
          </div>
        </form>
      </div>
    </Container>
  );
}
