import React from "react";
import PropTypes from "prop-types";
import { Topbar } from "./components";

const Minimal = (props) => {
  /**
   * children component passed from RouteWithLayout page
   */
  const { children } = props;
  return (
    <div>
      <Topbar />
      <main>{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Minimal;
