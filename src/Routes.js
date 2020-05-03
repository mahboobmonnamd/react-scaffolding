import React from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout";
import { NotFound, Dashboard, SignIn } from "./views";
import { MinimalLayout, MainLayout, FullViewLayout } from "./layouts";
const routes = [
  {
    component: Dashboard,
    layout: MainLayout,
    path: "/dashboard",
  },
  {
    component: SignIn,
    layout: FullViewLayout,
    path: "/sign-in",
  },
  {
    component: NotFound,
    layout: MinimalLayout,
    path: "/not-found",
  },
];

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      {routes.map((route) => (
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
