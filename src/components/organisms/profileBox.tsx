import React from "react";

import Box from "../atoms/box";
import * as styles from "./profileBox.module.scss";

const ProfileBox = () => {
  return (
    <Box>
      <div className={styles.profileBox}>
        <div>kohei watanabe</div>
      </div>
    </Box>
  );
};

export default ProfileBox;
