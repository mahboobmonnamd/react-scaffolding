import React from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout";
import { NotFound, Dashboard } from "./views";
import { MinimalLayout, MainLayout } from "./layouts";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={NotFound}
        path="/not-found"
        layout={MinimalLayout}
        exact
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
