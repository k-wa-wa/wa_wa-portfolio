import React from "react";

import * as styles from "./header.module.scss";
import Logo from "../../molecules/header/logo";
import Tabs from "../../molecules/header/tabs";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.tabs}>
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default Header;
