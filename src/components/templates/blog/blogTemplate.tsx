import React from "react";

import * as styles from "./blogTemplate.module.scss";
import Layout from "../_layout";

type Props = {
  children: React.ReactNode;
  writer: React.ReactNode;
  toc: React.ReactNode;
};
const BlogTemplate: React.FC<Props> = ({ children, writer, toc }) => {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.blogMain}>{children}</div>
        <div className={styles.writer}>{writer}</div>
        <div className={styles.tocBox}>
          <div className={styles.toc}>{toc}</div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogTemplate;
