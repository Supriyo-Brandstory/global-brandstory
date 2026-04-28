'use client';
import React from "react";
import styles from "@/style/common/commonBlog.module.css";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const CommonBlog = ({ blogData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = ["All", "UI / UX", "Creative Production", "Branding", "Web App Development", "Technology", "Consulting", "Digital Marketing", "Strategy", "SEO", "Performance Marketing", "Web Development"];

  // Get current state from URL
  const activeFilter = searchParams.get("category") || "All";
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;

  const blogs = (blogData?.data || []).map((blog) => {
    const item = blog.attributes || blog;
    const categories = (item.blog_categories || []).map(cat => cat.catName).filter(Boolean);
    const blogImage = item.blogImage?.data?.attributes || item.blogImage;
    const imageUrl = blogImage?.url
      ? (blogImage.url.startsWith('http') ? blogImage.url : `${STRAPI_URL}${blogImage.url}`)
      : "https://picsum.photos/id/1/600/400";
    return {
      filter: categories[0] || "Uncategorized",
      categories: categories.length > 0 ? categories : ["Uncategorized"],
      title: item.blogTitle,
      date: item.blogDate
        ? new Date(item.blogDate).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })
        : new Date(item.publishedAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
      image: imageUrl,
      buttonText: "Read More",
      buttonLink: `/blogs/${item.blogSlug}`,
    };
  });

  /* ---------------- PAGINATION META FROM API ---------------- */
  const pagination = blogData?.meta?.pagination || {};
  const totalPages = pagination.pageCount || 1;

  const getPageNumbers = () => {
    const delta = 1; // Number of pages to show on each side of the current page
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers();

  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleFilterChange = (filter) => {
    updateParams({ category: filter === "All" ? null : filter, page: 1 });
  };

  const handlePageChange = (page) => {
    updateParams({ page });
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
              className={`${styles.filterBtn} ${activeFilter === item ? styles.active : ""
                }`}
              onClick={() => handleFilterChange(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* BLOG CARDS */}
        <div className={styles.cardsGrid}>
          {blogs.map((card, i) => (
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
              onClick={() => handlePageChange(currentPage - 1)}
            >
              «
            </button>

            {pageNumbers.map((page, index) => (
              page === '...' ? (
                <span key={`dots-${index}`} className={styles.dots}>...</span>
              ) : (
                <button
                  key={page}
                  className={`${styles.pageBtn} ${currentPage === page ? styles.activePage : ""
                    }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            ))}

            <button
              className={styles.pageBtn}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              »
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
