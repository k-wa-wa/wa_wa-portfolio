import React from "react";
import { Link } from "gatsby";

import * as styles from "./logoText.module.scss";

const LogoText = () => {
  return (
    <Link to="/" className={styles.logoText}>
      Wa__Wa
    </Link>
  );
};

export default LogoText;
