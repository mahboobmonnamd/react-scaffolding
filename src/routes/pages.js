import { NotFound, Dashboard, SignIn } from "../views";
import { MinimalLayout, MainLayout, FullViewLayout } from "../layouts";

export const pages = [
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
