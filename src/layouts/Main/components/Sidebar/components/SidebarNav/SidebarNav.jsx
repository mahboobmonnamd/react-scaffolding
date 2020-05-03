import React, { forwardRef } from "react";
import { List, ListItem, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CustomLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <NavLink {...props} />
  </div>
));

const SidebarNav = (props) => {
  const { pages, className, ...rest } = props;

  return (
    <List>
      {pages.map((page) => (
        <ListItem key={page.title}>
          <Button to={page.path} component={CustomLink}>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
};

export default SidebarNav;
