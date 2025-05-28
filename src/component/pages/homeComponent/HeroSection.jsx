// components/HeroSection.jsx
import styles from '@/style/homepage.module.css';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                <div className={styles.heroTop}>
                    <div className={styles.heroTopText}>
                        Since 2015
                    </div>
                    <div className={styles.heroTopimage}>
                        <img src="/images/herotop.png" alt="Hero Top Image" className={styles.heroTopImage} />
                    </div>

                </div>
                <h2 className={styles.heroTitle}>
                    Built on Trust.
                </h2>
                <h2 className={styles.heroSubtitle}>
                    Backed by Impact.
                </h2>
                <p className={styles.heroDescription}>
                   A full-stack growth studio built for businesses that want more than just services.
                </p>
                <p className={styles.heroDescription}>
                    We build smart, data-driven, creative, and reliable solutions that help you grow today—and stay ahead tomorrow.
                    </p>
                <div className={styles.heroButtom}>
                    <div className={styles.heroTopimage}>
                        <img src="/images/herobuttom.png" alt="Hero Top Image" className={styles.heroTopImage} />
                    </div>
                    <div className={styles.heroTopText}>
                      Chosen by 500+ brands
                    </div>

                </div>
            </div>


        </section>
    );
}
