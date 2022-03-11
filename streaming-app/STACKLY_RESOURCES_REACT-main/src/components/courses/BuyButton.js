import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: "64px",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    width: "100%",
    color: "#ffffff",
    fontWeight: "bold",
    backgroundColor: "#3f69ff",
    "&:hover": {
      backgroundColor: "#3f69ff",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  size: {
    height: "4rem",
    width: "18rem",
    fontSize: "1rem",
  },
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" className={classes.size}>
        COMPRAR
      </ColorButton>
    </div>
  );
}
