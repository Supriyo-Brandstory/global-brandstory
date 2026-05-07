import React from "react";
import styles from "@/style/common/commonBanner4.module.css";
import * as LucideIcons from "lucide-react";

export const CommonBanner4 = ({ 
  heading, 
  tags = [], 
  googleLogo = "/images/commonBanner4/google-logo.png"
}) => {
  
  const renderIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={16} className={styles.tagIcon} /> : null;
  };

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: heading }}
          />

          <div className={styles.tagsContainer}>
            <div className={styles.tagRow}>
              {tags.map((tag, index) => (
                <div key={index} className={styles.tag}>
                  {renderIcon(tag.icon)}
                  <span>{tag.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {googleLogo && (
          <div className={styles.googlePartner}>
            <img src={googleLogo} alt="Google Logo" />
          </div>
        )}
      </div>
    </section>
  );
};
