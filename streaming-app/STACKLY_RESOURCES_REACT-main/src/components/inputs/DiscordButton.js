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
    backgroundColor: "#728ad6",
    borderColor: "#728ad6",
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
      backgroundColor: "#728ad6",
      borderColor: "#728ad6",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#728ad6",
      borderColor: "#728ad6",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #728ad6",
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    width: "100%",
    color: "#ffffff",
    fontWeight: "bold",
    backgroundColor: "#728ad6",
    "&:hover": {
      backgroundColor: "#728ad6",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  size: {
    height: "3rem",
    width: "10rem",
    fontSize: "1rem",
  },
}));

export default function DiscordButton() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" className={classes.size}>
        DISCORD
      </ColorButton>
    </div>
  );
}
