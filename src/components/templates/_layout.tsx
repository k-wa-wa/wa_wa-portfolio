import React from "react";
import Header from "../organisms/header/header";

import "modern-css-reset";
import "./_layout.scss";
import * as styles from "./_layout.module.scss";

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
