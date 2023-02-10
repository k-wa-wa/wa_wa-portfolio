import React from "react";
import { Link } from "gatsby";
import * as styles from "./header.module.scss";

const TABS = [
  { display: "Blog", link: "/blog" },
  { display: "Skills", link: "/skills" },
  { display: "Contact", link: "/contact" },
];
const BrowserHeader = () => {
  return (
    <>
      <div className={styles.browserHeader1}>
        <div className={styles.buttons}>
          <div className={styles.closeButton} />
          <div className={styles.minimizeButton} />
          <div className={styles.maximizeButton} />
        </div>

        {TABS.map((tab, i) => (
          <Link key={tab.display} className={styles.tab} to={tab.link}>
            {i === 0 && <div className={styles.tabActive} />}
            <div className={styles.tabName}>{tab.display}</div>
          </Link>
        ))}
      </div>

      <div className={styles.browserHeader2} />
    </>
  );
};

export default BrowserHeader;
