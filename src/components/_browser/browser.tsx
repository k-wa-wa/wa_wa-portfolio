import React from "react";
import { Link } from "gatsby";

import * as styles from "./browser.module.scss";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};
const Browser: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.browser}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Browser;
