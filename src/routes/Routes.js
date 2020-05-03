import React from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "../components/RouteWithLayout/RouteWithLayout";
import { pages } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      {pages.map((route) => (
        <RouteWithLayout
          component={route.component}
          exact
          layout={route.layout}
          path={route.path}
        />
      ))}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
