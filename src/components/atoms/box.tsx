import React from "react";

import * as styles from "./box.module.scss";
import { Link } from "gatsby";

type Props = {
  children: React.ReactNode;
  linkTo?: string;
};
const Box: React.FC<Props> = ({ children, linkTo }) => {
  return linkTo ? (
    <Link to={linkTo} className={styles.box}>
      {children}
    </Link>
  ) : (
    <div className={styles.box}>{children}</div>
  );
};

export default Box;
