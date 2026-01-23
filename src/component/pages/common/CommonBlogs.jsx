'use client';
import React, { useState } from "react";
import styles from "@/style/common/commonBlog.module.css";

export const CommonBlog = () => {
  const filters = ["All", "UI / UX", "Branding", "Technology", "Digital Marketing", "Strategy"];
  const [activeFilter, setActiveFilter] = useState("All");

  const blogs = [
    {
      filter: "UI / UX",
      category: "UX • Experience Design",
      title: "What Makes Digital Experiences Truly Human",
      description:
        "Technology Evolves Fast, But Human Expectations Evolve Faster. Here’s How We Design Experiences That Feel Intuitive, Inclusive, And Meaningful.",
      buttonText: "Read More",
      buttonLink: "#"
    },
    {
      filter: "Branding",
      category: "Branding • Strategy",
      title: "Brand Strategy Is Not A Logo",
      description:
        "A Strong Brand Is Built On Clarity, Consistency, And Conviction—Not Visuals Alone. Let’s Break Down What Actually Drives Brand Recall And Trust.",
      buttonText: "Read More",
      buttonLink: "#"
    },
    {
      filter: "Technology",
      category: "Web Development • Design Systems",
      title: "Scaling Websites Without Breaking Experience",
      description:
        "As Businesses Grow, Websites Often Get Complex. Learn How Scalable Design Systems Keep Things Simple, Fast, And Flexible.",
      buttonText: "Read More",
      buttonLink: "#"
    },
    {
      filter: "Digital Marketing",
      category: "Digital Marketing • Analytics",
      title: "Data-Led Creativity: Where Logic Meets Imagination",
      description:
        "Creative Decisions Backed By Insights Lead To Measurable Impact. This Is How Data Strengthens—Not Limits—Creativity.",
      buttonText: "Read More",
      buttonLink: "#"
    },
    {
      filter: "UI / UX",
      category: "Product • UX Strategy",
      title: "Why Every Growing Business Needs UX Thinking",
      description:
        "UX Isn’t Just For Apps. It’s A Mindset That Helps Businesses Reduce Friction, Increase Conversions, And Build Loyalty.",
      buttonText: "Read More",
      buttonLink: "#"
    },
    {
      filter: "Strategy",
      category: "Digital Strategy",
      title: "From Campaigns To Ecosystems",
      description:
        "Why Modern Brands Must Think Beyond One-Off Campaigns And Build Connected Digital Ecosystems Instead.",
      buttonText: "Read More",
      buttonLink: "#"
    },
  ];

  const filteredBlogs =
    activeFilter === "All"
      ? blogs
      : blogs.filter((b) => b.filter === activeFilter);

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <h2 className={styles.sectionTitle}>Blogs</h2>

        {/* FILTERS */}
        <div className={styles.filters}>
          {filters.map((item, i) => (
            <div
              key={i}
              className={`${styles.filterBtn} ${activeFilter === item ? styles.active : ""}`}
              onClick={() => setActiveFilter(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* BLOG CARDS */}
        <div className={styles.cardsGrid}>
          {filteredBlogs.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardContent}>
                <p className={styles.cardCategory}>{card.category}</p>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>

                <a href={card.buttonLink} className={styles.cardButton}>
                  <span>{card.buttonText}</span>
                  <img src="/images/box-arrow.svg" alt="arrow" className={styles.icon} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className={styles.pagination}>
          <button className={styles.pageBtn}>«</button>
          <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>»</button>
        </div>
      </div>
    </div>
  );
};
