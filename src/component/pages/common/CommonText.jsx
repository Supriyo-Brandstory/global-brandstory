import React from "react";
import styles from "@/style/common/commonText.module.css";

const CommonText = ({
  title = null, 
  description = []
}) => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>
            {title}
        </h2>
        <p className={styles.description} dangerouslySetInnerHTML={{__html:description}} />
    </div>
  );
};

export default CommonText;
