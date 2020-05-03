import React from "react";
import { pages } from "./../../../../routes/pages";
import { SidebarNav } from "./components";

const Sidebar = (props) => {
  return <SidebarNav pages={pages} />;
};

export default Sidebar;
