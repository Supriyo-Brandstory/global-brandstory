"use client";
import { useState } from "react";
import styles from "@/style/common/commonLinks.module.css";

const ITEMS_PER_PAGE = 6;

const CommonLinks = ({ title, data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = data.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
    <div className={styles.container}>
      {title && <div className={styles.heading}>{title}</div>}

      <div className={styles.list}>
        {visibleItems.map((item, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.label}>{item.title}</div>
            <button className={styles.applyBtn}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
    {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={`${styles.pageBtn} ${currentPage === 1 ? styles.disabled : ""}`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            «
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.activePage : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className={`${styles.pageBtn} ${currentPage === totalPages ? styles.disabled : ""}`}
            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          >
            »
          </button>
        </div>
      )}
    </>
  );
};

export default CommonLinks;
