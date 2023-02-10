import React from "react";

import Box from "../../atoms/box";

import * as styles from "./blogBody.module.scss";
import "github-markdown-css/github-markdown-light.css";

type Props = {
  bodyHtml: string;
  tags: string[];
};
const BlogBody: React.FC<Props> = ({ bodyHtml, tags }) => {
  return (
    <Box>
      <div className={styles.blogBody}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div key={tag} className={styles.tag}>
              # {tag}
            </div>
          ))}
        </div>

        <article className="markdown-body">
          {/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <div dangerouslySetInnerHTML={{ __html: `${bodyHtml}` }} />
        </article>
      </div>
    </Box>
  );
};

export default BlogBody;
