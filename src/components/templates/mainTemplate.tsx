import React from "react";

import * as styles from "./mainTemplate.module.scss";
import Layout from "./_layout";

type Props = {
  children: React.ReactNode;
};
const MainTemplate: React.FC<Props> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default MainTemplate;
