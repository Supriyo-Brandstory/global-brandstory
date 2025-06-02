"use client";
import React, { useRef, useState } from 'react';
import styles from '@/style/homepage.module.css';

const Banner = () => {
  const bannerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [lastImagePos, setLastImagePos] = useState(null);
  const fixedDistance = 100; // tumi chaile distance eikhane change korte parbe (px)

  const handleMouseMove = (e) => {
    const rect = bannerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (lastImagePos) {
      const dx = mouseX - lastImagePos.x;
      const dy = mouseY - lastImagePos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < fixedDistance) {
        // distance kom, notun image add korbi na
        return;
      }
    }

    const randomIndex = Math.floor(Math.random() * 10) + 1;
    const imageSrc = `/images/mouse/img${randomIndex}.svg`;
const effectClass = Math.random() < 0.5 ? 'hoverImageRound' : 'hoverImageSquare';

const newImage = {
  id: Date.now() + Math.random(),
  x: mouseX,
  y: mouseY,
  src: imageSrc,
  effect: effectClass,
};

    setImages((prev) => [...prev, newImage]);
    setLastImagePos({ x: mouseX, y: mouseY });

    setTimeout(() => {
      setImages((prev) => prev.filter((img) => img.id !== newImage.id));
    }, 300);
  };

  return (
    <div
      className={styles.banner}
      ref={bannerRef}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerHeading}>
          Everything Your Brand Needs to <br />
          Grow — In One Digital Agency
        </h1>
        <p className={styles.bannerParagraph}>
          Just one sharp, plugged-in team delivering strategy, design, content, tech, and marketing — all under one roof.
        </p>
        <button className={styles.bannerButton}>Let’s Talk</button>

        <ul className={styles.bannerList}>
          <li>Strategy</li>
          <li>DESIGN</li>
          <li>MARKETING</li>
          <li>VIDEO</li>
          <li>DEVELOPMENT</li>
          <li>ANALYTICS</li>
        </ul>
      </div>

      {images.map((img) => (
        <img
          key={img.id}
          src={img.src}
           className={`${styles.hoverImage} ${styles[img.effect]}`}
          style={{
            left: `${img.x}px`,
            top: `${img.y}px`,
          }}
          alt="trail"
        />
      ))}
    </div>
  );
};

export default Banner;
