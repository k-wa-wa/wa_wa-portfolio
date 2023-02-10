import React from "react";
import { Link } from "gatsby";

import * as styles from "./tabs.module.scss";

const TABS = [
  { display: "Blog", link: "/blog" },
  { display: "Skills", link: "/skills" },
  { display: "Contact", link: "/contact" },
];
const Tabs = () => {
  return (
    <div className={styles.tabs}>
      {TABS.map((tab, i) => (
        <Link key={tab.display} to={tab.link} className={styles.tab}>
          <div className={styles.tabDisplay}>{tab.display}</div>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
