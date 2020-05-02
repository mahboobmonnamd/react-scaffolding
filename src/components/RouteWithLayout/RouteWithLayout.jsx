import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Will render the component inside the layout which is passed.
 * @param {*} props
 */
const RouteWithLayout = (props) => {
  const { path: Path, layout: Layout, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      path={Path}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

export default RouteWithLayout;
