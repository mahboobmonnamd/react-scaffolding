import React from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout";
import { NotFound } from "./views";
import { Minimal } from "./layouts";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/not-found" />
      <RouteWithLayout
        component={NotFound}
        path="/not-found"
        layout={Minimal}
        exact
      />
    </Switch>
  );
};

export default Routes;
