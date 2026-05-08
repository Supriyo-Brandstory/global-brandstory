import React from 'react';
import styles from '@/style/common/csImageText.module.css';

const CsImageText = ({ 
  title, 
  description, 
  points = [], 
  image, 
  buttonText, 
  buttonLink = "#",
  imageLeft = false 
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${imageLeft ? styles.reverse : ''}`}>
        <div className={styles.content}>
          {title && <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />}
          {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
          
          {points.length > 0 && (
            <ul className={styles.points}>
              {points.map((point, index) => (
                <li key={index} className={styles.pointItem} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          )}

          {buttonText && (
            <div className={styles.btnWrapper}>
              <a href={buttonLink} className={styles.button}>
                {buttonText}
              </a>
            </div>
          )}
        </div>

        <div className={styles.imageWrapper}>
          {image && <img src={image} alt={title} className={styles.image} />}
        </div>
      </div>
    </div>
  );
};

export default CsImageText;
