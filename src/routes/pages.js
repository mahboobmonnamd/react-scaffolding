import React from "react";
import { NotFound, Dashboard, SignIn, HomePage } from "../views";
import { MinimalLayout, MainLayout, FullViewLayout } from "../layouts";

import DashboardIcon from "@material-ui/icons/Dashboard";
import LockOpenIcon from "@material-ui/icons/LockOpen";

export const pages = [
  {
    component: Dashboard,
    layout: MainLayout,
    path: "/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    component: HomePage,
    layout: MainLayout,
    path: "/home",
    title: "Home",
    icon: <DashboardIcon />,
  },
  {
    component: SignIn,
    layout: FullViewLayout,
    path: "/sign-in",
    title: "Authentication",
    icon: <LockOpenIcon />,
  },
  {
    component: NotFound,
    layout: MinimalLayout,
    path: "/not-found",
    title: "Not Found",
  },
];
