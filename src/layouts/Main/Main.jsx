import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  const { children } = props;
  return (
    <div>
      <header> heade </header>
      <main>{children}</main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
