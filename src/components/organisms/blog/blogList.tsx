import React from "react";

import * as styles from "./blogList.module.scss";
import Box from "../../atoms/box";
import { MicrocmsBlogConnection } from "../../../graphqlTypes";

type Props = {
  allMicrocmsBlog: MicrocmsBlogConnection;
};
const BlogList: React.FC<Props> = ({ allMicrocmsBlog }) => {
  console.log(allMicrocmsBlog.edges);
  return (
    <div className={styles.blogList}>
      {allMicrocmsBlog.edges.map(({ node }) => (
        <Box key={node.blogId} linkTo={`/blog/${node.blogId}`}>
          <div className={styles.item}>
            <img
              src={`${node.image?.url}`}
              alt="img"
              className={styles.image}
            />
            <div>{node.title}</div>
          </div>
        </Box>
      ))}
    </div>
  );
};

export default BlogList;
