import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    width: "18rem",
    "& label.Mui-focused": {
      color: "#000000",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#000000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000000",
      },
      "&:hover fieldset": {
        borderColor: "#000000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000000",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomInput({ text, value, read }) {
  const classes = useStyles();

  return (
    <CssTextField
      key={value}
      className={classes.margin}
      label={text}
      defaultValue={value}
      variant="outlined"
      id={`custom-css-outlined-input ${value}`}
      InputProps={{
        readOnly: read || false,
      }}
    />
  );
}
