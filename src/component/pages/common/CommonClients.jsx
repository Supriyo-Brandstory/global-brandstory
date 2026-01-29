'use client';
import { useEffect, useRef } from "react";
import styles from '@/style/common/commonClients.module.css';

export const CommonClients = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone all images once directly inside the same container
    const items = [...slider.children];
    items.forEach(item => {
      const clone = item.cloneNode(true);
      slider.appendChild(clone);
    });
  }, []);

  return (
    <div className={styles.container}>
       <div className={styles.layout}>
            <div className={styles.title}>Industries We’ve Helped Evolve</div>
            <div className={styles.desc}>
              With experience across 30+ industries, BrandStory brings the right insight — we live it, breathe it, and know how to move it forward. 
              From tech to education, fintech to fashion — we know how to make stories stick and strategies scale.
            </div>
            <div className={styles.mobileGap} />
            <div className={styles.sliderWrapper}>
              <div className={styles.logoSlider} ref={sliderRef}>
                  <img src="/images/ClientSlider/wg.svg" alt="" />
                  <img src="/images/ClientSlider/se.svg" alt="" />
                  <img src="/images/ClientSlider/fk.svg" alt="" />
                  <img src="/images/ClientSlider/az.svg" alt="" />
                  <img src="/images/ClientSlider/lv.svg" alt="" />
                  <img src="/images/ClientSlider/cs.svg" alt="" />
              </div>
            </div>
            <div className={styles.sliderWrapper}>
              <div className={styles.logoSlider} ref={sliderRef}>
                  <img src="/images/ClientSlider/decathlon.svg" alt="" />
                  <img src="/images/ClientSlider/apollo.svg" alt="" />
                  <img src="/images/ClientSlider/adarsh.svg" alt="" />
                  <img src="/images/ClientSlider/provident.svg" alt="" />
                  <img src="/images/ClientSlider/carafina.svg" alt="" />
                  <img src="/images/ClientSlider/pkc.svg" alt="" />
              </div>
            </div>
            <div className={styles.sliderWrapper}>
              <div className={styles.logoSlider} ref={sliderRef}>
                  <img src="/images/ClientSlider/wb.svg" alt="" />
                  <img src="/images/ClientSlider/deloitte.svg" alt="" />
                  <img src="/images/ClientSlider/simens.svg" alt="" />
                  <img src="/images/ClientSlider/marcedes.svg" alt="" />
                  <img src="/images/ClientSlider/farro.svg" alt="" />
                  <img src="/images/ClientSlider/ashray.svg" alt="" />
              </div>
            </div>
       </div>
    </div>
  );
};
