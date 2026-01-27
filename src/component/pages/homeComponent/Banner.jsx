"use client";
import React, { useRef, useState } from "react";
import styles from "@/style/homepage.module.css";

const Banner = () => {
  // const bannerRef = useRef(null);
  // const [images, setImages] = useState([]);
  // const [lastImagePos, setLastImagePos] = useState(null);
  // const fixedDistance = 100; // distance (px)

  // ✅ Fix: hardcoded image paths
  const imageList = [
    "/images/mouse/img1.svg",
    "/images/mouse/img2.svg",
    "/images/mouse/img3.svg",
    "/images/mouse/img4.svg",
    "/images/mouse/img5.svg",
    "/images/mouse/img6.svg",
    "/images/mouse/img7.svg",
    "/images/mouse/img8.svg",
    "/images/mouse/img9.svg",
    "/images/mouse/img10.svg",
  ];

  /*
  // const handleMouseMove = (e) => {
  //   const rect = bannerRef.current.getBoundingClientRect();
  //   const mouseX = e.clientX - rect.left;
  //   const mouseY = e.clientY - rect.top;

  //   if (lastImagePos) {
  //     const dx = mouseX - lastImagePos.x;
  //     const dy = mouseY - lastImagePos.y;
  //     const dist = Math.sqrt(dx * dx + dy * dy);

  //     if (dist < fixedDistance) {
  //       return; // too close → no new image
  //     }
  //   }

  //   const randomIndex = Math.floor(Math.random() * imageList.length);
  //   const imageSrc = imageList[randomIndex];
  //   const effectClass =
  //     Math.random() < 0.5 ? "hoverImageRound" : "hoverImageSquare";

  //   const newImage = {
  //     id: Date.now() + Math.random(),
  //     x: mouseX,
  //     y: mouseY,
  //     src: imageSrc,
  //     effect: effectClass,
  //   };

  //   setImages((prev) => [...prev, newImage]);
  //   setLastImagePos({ x: mouseX, y: mouseY });

  //   setTimeout(() => {
  //     setImages((prev) => prev.filter((img) => img.id !== newImage.id));
  //   }, 300);
  // };
  // */

  return (
    <div
      className={styles.banner}
      // ref={bannerRef}
      // onMouseMove={handleMouseMove}
    >
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerHeading}>
          Everything Your Brand Needs to <br />
          Grow — In One Digital Agency
        </h1>
        <p className={styles.bannerParagraph}>
          Just one sharp, plugged-in team delivering strategy, design, content,
          tech, and marketing — all under one roof.
        </p>
        <button className={styles.bannerButton}>Let’s Talk</button>

        <ul className={styles.bannerList}>
          <li>
            <img src="/icons/dot.svg" alt="dot" /> Strategy
          </li>
          <li>
            <img src="/icons/dot.svg" alt="dot" /> DESIGN
          </li>
          <li>
            <img src="/icons/dot.svg" alt="dot" /> MARKETING
          </li>
          <li>
            <img src="/icons/dot.svg" alt="dot" /> VIDEO
          </li>
          <li>
            <img src="/icons/dot.svg" alt="dot" /> DEVELOPMENT
          </li>
          <li>
            <img src="/icons/dot.svg" alt="dot" /> ANALYTICS
          </li>
        </ul>
      </div>

      {/* {images.map((img) => (
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
      ))} */}
    </div>
  );
};

export default Banner;
