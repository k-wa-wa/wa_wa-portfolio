import React from "react";

import * as styles from "./blogsTemplate.module.scss";
import Layout from "../_layout";

type Props = {
  children: React.ReactNode;
};
const BlogsTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.blogs}>{children}</div>
      </div>
    </Layout>
  );
};

export default BlogsTemplate;
