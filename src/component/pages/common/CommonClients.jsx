'use client';

import styles from '@/style/common/commonClients.module.css';

export const CommonClients = () => {

  const row1 = [
    "wg.svg",
    "se.svg",
    "fk.svg",
    "az.svg",
    "lv.svg",
    "cs.svg",
  ];

  const row2 = [
    "decathlon.svg",
    "apollo.svg",
    "adarsh.svg",
    "provident.svg",
    "carafina.svg",
    "pkc.svg",
  ];

  const row3 = [
    "wb.svg",
    "deloitte.svg",
    "simens.svg",
    "marcedes.svg",
    "farro.svg",
    "ashray.svg",
  ];

  const doubleRow = (arr) => [...arr, ...arr];

  const renderSlider = (logos, reverse = false) => {
    const extendedLogos = doubleRow(logos);
    return (
      <div className={styles.sliderWrapper}>
        <div className={`${styles.logoSlider} ${reverse ? styles.reverse : ''}`}>
          <div className={styles.logoTrack}>
            {extendedLogos.map((logo, i) => (
              <div className={styles.logoItem} key={i}>
                <img
                  src={`/images/ClientSlider/${logo}`}
                  alt="client-logo"
                />
              </div>
            ))}
          </div>
          <div className={styles.logoTrack} aria-hidden="true">
            {extendedLogos.map((logo, i) => (
              <div className={styles.logoItem} key={`clone-${i}`}>
                <img
                  src={`/images/ClientSlider/${logo}`}
                  alt="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.container}>

      <div className={styles.layout}>

        <div className={styles.topSection}>

          <h2 className={styles.title}>
            Industries We’ve Helped Evolve
          </h2>

          <p className={styles.desc}>
            With experience across 30+ industries, BrandStory brings the right insight —
            we live it, breathe it, and know how to move it forward.
            From tech to education, fintech to fashion —
            we know how to make stories stick and strategies scale.
          </p>

        </div>

        <div className={styles.sliderSection}>

          {renderSlider(row1)}

          {renderSlider(row2, true)}

          {renderSlider(row3)}

        </div>

      </div>

    </section>
  );
};