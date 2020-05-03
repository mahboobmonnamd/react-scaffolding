import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  FancyButton: {
    borderRadius: 20,
    padding: 10,
    marginLeft: 5,
  },
}));

function FancyButton(props) {
  const classes = useStyles();

  return <button className={classes.FancyButton}>{props.children}</button>;
}

export default FancyButton;
