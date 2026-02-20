import React from "react";
import styles from "@/style/common/commonText.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const CommonText = ({
  title = null,
  description = []
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title}
      </h2>
      {description && (
        typeof description === "string" ? (
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <div className={styles.description} >
            <BlocksRenderer content={description} />
          </div>
        )
      )}
    </div>
  );
};

export default CommonText;
