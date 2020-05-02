import React from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout";
import { NotFound } from "./views";
import { Minimal } from "./layouts";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={NotFound}
        path="/not-found"
        layout={Minimal}
        exact
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
