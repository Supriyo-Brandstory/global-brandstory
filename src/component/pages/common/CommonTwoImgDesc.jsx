"use client";
import styles from "@/style/common/commonTwoImgDesc.module.css";
import Image from "next/image";

const CommonTwoImgDesc = ({ data }) => { 
  return ( 
    <section className={styles.frame}>
      {/* Heading */}
      {data.heading && <h2 className={styles.heading}>{data.heading}</h2>}
      {data.subHeading && <p className={styles.subHeading}>{data.subHeading}</p>}

      {/* Dynamic Rows */}
      {data.rows?.map((row, index) => (
        <div 
          key={index} 
          className={row.reverse ? styles.rowReverse : styles.row}
        >
          <div className={styles.imageBox}>
            <Image
              src={row.img}
              alt={row.alt}
              width={600}
              height={350}
              className={styles.img}
            />
          </div>
          <div className={styles.textBox}>
            {row.text.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommonTwoImgDesc;
