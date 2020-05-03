import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Sidebar, Topbar, Footer } from "./components";

const useStyles = makeStyles((theme) => ({}));

const Main = (props) => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Topbar />
      <Sidebar />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
