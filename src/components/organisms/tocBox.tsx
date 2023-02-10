import React from "react";
import { Link } from "gatsby";

import Box from "../atoms/box";
import * as styles from "./tocBox.module.scss";

const elementClassName = (tagName: string) => {
  if (tagName === "h1") {
    return styles._h1;
  } else if (tagName === "h2") {
    return styles._h2;
  } else if (tagName === "h3") {
    return styles._h3;
  }
  return "";
};

type Props = {
  toc: {
    tagName: string;
    text: string;
    id: string;
    name: string;
  }[];
};
const Toc: React.FC<Props> = ({ toc }) => {
  return (
    <Box>
      <div className={styles.toc}>
        {toc.map((item, i) => (
          <div key={item.id}>
            <Link to={`#${item.id}`} className={elementClassName(item.tagName)}>
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Toc;
