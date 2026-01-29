'use client';
import React, { useState } from "react";
import styles from "@/style/common/commonBlog.module.css";

export const CommonBlog = () => {
  const BLOGS_PER_PAGE = 6;

  const filters = ["All", "UI / UX", "Branding", "Technology", "Digital Marketing", "Strategy"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const blogs = [
    {
      filter: "Experience Design",
      categories: ["Experience Design", "UX"],
      title: "What Makes Digital Experiences Truly Human",
      date: "January 3, 2026",
      image: "https://picsum.photos/id/1/600/400",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      filter: "Branding",
      categories: ["Branding", "Strategy"],
      title: "Brand Strategy Is Not A Logo",
      date: "January 17, 2026",
      image: "https://picsum.photos/id/2/600/400",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      filter: "Web Development",
      categories: ["Web Development", "Design Systems"],
      title: "Scaling Websites Without Breaking Experience",
      date: "January 9, 2026",
      image: "https://picsum.photos/id/3/600/400",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      filter: "Digital Marketing",
      categories: ["Digital Marketing", "Analytics"],
      title: "Data-Led Creativity: Where Logic Meets Imagination",
      date: "February 26, 2026",
      image: "https://picsum.photos/id/4/600/400",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      filter: "Product",
      categories: ["Product", "UX Strategy"],
      title: "Why Every Growing Business Needs UX Thinking",
      date: "February 6, 2026",
      image: "https://picsum.photos/id/5/600/400",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      filter: "Digital Strategy",
      categories: ["Digital Strategy"],
      title: "From Campaigns To Ecosystems",
      date: "January 12, 2026",
      image: "https://picsum.photos/id/6/600/400",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      filter: "Digital Marketing",
      categories: ["Digital Marketing", "Analytics"],
      title: "Another Marketing Insight",
      date: "March 1, 2026",
      image: "https://picsum.photos/id/7/600/400",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      filter: "Product",
      categories: ["Product", "UX"],
      title: "Product Thinking 101",
      date: "March 5, 2026",
      image: "https://picsum.photos/id/8/600/400",
      buttonText: "Read More",
      buttonLink: "#",
    },
    {
      filter: "Branding",
      categories: ["Branding"],
      title: "Brand Consistency Matters",
      date: "March 8, 2026",
      image: "https://picsum.photos/id/9/600/400",
      buttonText: "Read More",
      buttonLink: "#",
    },
  ];

  /* ---------------- FILTER ---------------- */
  const filteredBlogs =
    activeFilter === "All"
      ? blogs
      : blogs.filter((b) => b.filter === activeFilter);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <h2 className={styles.sectionTitle}>Blogs</h2>

        {/* FILTERS */}
        <div className={styles.filters}>
          {filters.map((item, i) => (
            <div
              key={i}
              className={`${styles.filterBtn} ${
                activeFilter === item ? styles.active : ""
              }`}
              onClick={() => handleFilterChange(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* BLOG CARDS */}
        <div className={styles.cardsGrid}>
          {paginatedBlogs.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={card.image} alt={card.title} />
                <div className={styles.pills}>
                  {card.categories.map((cat, idx) => (
                    <span key={idx} className={styles.pill}>{cat}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.date}>{card.date}</p>

                <a href={card.buttonLink} className={styles.cardButton}>
                  <span>{card.buttonText}</span>
                  <img
                    src="/images/box-arrow.svg"
                    alt="arrow"
                    className={styles.icon}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              «
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                className={`${styles.pageBtn} ${
                  currentPage === page ? styles.activePage : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              className={styles.pageBtn}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              »
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
