"use client";
import styles from "@/style/seopage.module.css";

import Image from "next/image";

const SeoRoiSection = () => {
  return (
    <section className={styles.seoSection}>
      {/* Heading */}
      <h2 className={styles.heading}>
        SEO ROI: Building Value That Keeps Paying Off
      </h2>
      <p className={styles.subHeading}>
        SEO Builds Assets That Keep Working Long After The Campaign Starts.
        Unlike Paid Ads, Traffic Doesn’t Stop When You Stop Spending.
      </p>

      {/* First Row */}
      <div className={styles.row}>
        <div className={styles.imageBox}>
          <Image
            src="/images/seo/seo-graph.webp"
            alt="SEO Graph"
            width={600}
            height={350}
            className={styles.img}
          />
        </div>
        <div className={styles.textBox}>
          <p>
            <strong>Long-Term Asset –</strong> Paid Ads Stop The Moment You Pause
            The Budget. SEO Services Keep Delivering Value Over Time. A
            Well-Optimised Page That Ranks Can Attract Visitors For Months Or
            Even Years Without Additional Spending. This Makes SEO A Lasting
            Asset Rather Than A Temporary Cost.
          </p>
          <p>
            <strong>Cost-Effective Lead Generation –</strong> High-Quality Organic
            Traffic Often Comes At A Lower Cost Compared To Paid Advertising.
            Once Strong Rankings Are Achieved, You Continue To Receive Targeted
            Visitors Without Paying For Each Click, Allowing Your Budget To Work
            Harder For Longer.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className={styles.rowReverse}>
        <div className={styles.textBox}>
          <p>
            <strong>Brand Authority & Trust –</strong> Being Seen At The Top Of
            Organic Search Results Positions Your Business As A Trusted Leader
            In Your Field. Consistent Visibility Not Only Builds Brand
            Recognition But Also Gives Potential Customers The Confidence To
            Choose You Over Competitors.
          </p>
          <p>
            <strong>Case Study –</strong> One Client Saw A 131% Increase In Leads
            Within Six Months. This Was Achieved By Focusing On In-Depth Keyword
            Research To Target High-Intent Searches, Improving Content Creation
            To Address Customer Needs, And Optimising Site Pages To Guide
            Visitors Towards Taking Action.
          </p>
        </div>
        <div className={styles.imageBox}>
          <Image
            src="/images/seo/seo-ads.webp"
            alt="SEO Ads"
            width={600}
            height={350}
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
};

export default SeoRoiSection;
