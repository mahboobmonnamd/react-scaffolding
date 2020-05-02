import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const RouteWithLayout = (props) => {
  const { path: Path, layout: Layout, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      path={Path}
      render={(matchProps) => <Component {...matchProps} />}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
