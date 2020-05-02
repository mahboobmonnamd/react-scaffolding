import React from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout";
import { NotFound, Dashboard, SignIn } from "./views";
import { MinimalLayout, MainLayout, FullViewLayout } from "./layouts";

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
        component={SignIn}
        exact
        layout={FullViewLayout}
        path="/sign-in"
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
