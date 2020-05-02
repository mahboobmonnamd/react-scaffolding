import React from "react";
import styles from "./FullView.module.scss";

const FullView = (props) => {
  const { children } = props;

  return <div className={styles.content}>{children}</div>;
};

export default FullView;
