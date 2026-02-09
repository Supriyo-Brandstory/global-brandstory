import styles from '@/style/common/commonContactForm.module.css';

// components/ShareButtons.jsx
export default function ShareButtons() {
  return (
    <div>
      <div className={styles.contactBox}>
        {/* <p style={{ textAlign: 'center', fontSize: '18px' }}>
          Conect on Socials
        </p> */}
        <div className={`${styles.socialIcons} cursor-pointer`}>
          <img src="/images/contact-ico-facebook.svg" alt="Facebook" />
          <img src="/images/contact-ico-instagram.svg" alt="Instagram" />
          <img src="/images/contact-ico-linkedin.svg" alt="LinkedIn" />
          <img src="/images/contact-ico-youtube.svg" alt="YouTube" />
        </div>
      </div>
    </div>
  );
}
