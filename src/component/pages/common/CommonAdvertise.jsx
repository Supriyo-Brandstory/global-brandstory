import styles from '@/style/common/commonAdvertise.module.css';
import Link from 'next/link';

const CommonAdvertise = ({
  btnOneLink,
  btnTwoLink,
  btn1,
  btn2,
  title1,
  title2,
  description,
  footerText,
}) => {
  const getSafeLink = (link) => {
    if (!link || link === '#') return '/contact-us';
    return link;
  };

  return (
    <div className={styles.frame}>
      <div className={styles.innerFrame}>
        <span>
          <h2 className={styles.heading}>{title1}</h2>
          {title2 && <h2 className={styles.heading}>{title2}</h2>}
        </span>

        {description && (
          <p dangerouslySetInnerHTML={{ __html: description }} />
        )}

        {(btn1 || btn2) && (
          <div className={`flex gap-x-4 ${styles.buttons}`}>
            {btn1 && (
              <Link
                href={getSafeLink(btnOneLink)}
                className={styles.btn1}
              >
                {btn1}
              </Link>
            )}
          </div>
        )}

        {footerText && (
          <p
            className={styles.footertext}
            dangerouslySetInnerHTML={{ __html: footerText }}
          />
        )}
      </div>
    </div>
  );
};

export default CommonAdvertise;
