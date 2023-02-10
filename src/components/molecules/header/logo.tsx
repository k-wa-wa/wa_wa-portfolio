import React from "react";
import LogoText from "../../atoms/header/logoText";

import * as styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoText />
      (スタイルよりアウトプット)
    </div>
  );
};

export default Logo;
