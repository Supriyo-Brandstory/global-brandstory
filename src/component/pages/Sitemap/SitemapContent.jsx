"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "@/style/pages/sitemap.module.css";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function matchesQuery(page, query) {
  return (
    page.title.toLowerCase().includes(query) ||
    page.pathname.toLowerCase().includes(query)
  );
}

function filterSections(sections, query) {
  if (!query) return sections;

  return sections
    .map((section) => {
      const pages = section.pages.filter((page) => matchesQuery(page, query));
      return pages.length ? { ...section, pages } : null;
    })
    .filter(Boolean);
}

function PageLinks({ pages }) {
  return (
    <ul className={styles.linkList}>
      {pages.map((page) => (
        <li key={page.url}>
          <Link href={page.pathname} className={styles.link}>
            <span className={styles.linkText}>{page.title}</span>
            <span className={styles.linkArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SitemapContent({ sections, pageCount }) {
  const [query, setQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const normalizedQuery = query.trim().toLowerCase();

  const filteredSections = useMemo(
    () => filterSections(sections, normalizedQuery),
    [sections, normalizedQuery]
  );

  const visibleCount = useMemo(
    () => filteredSections.reduce((acc, section) => acc + section.pages.length, 0),
    [filteredSections]
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sitemap</h1>

        <div className={styles.toolbar}>
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon} aria-hidden="true">
              ⌕
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search pages by title or URL..."
              className={styles.searchInput}
              aria-label="Search sitemap pages"
            />
          </div>
          <p className={styles.resultCount}>
            Showing <strong>{visibleCount.toLocaleString()}</strong> of{" "}
            <strong>{pageCount.toLocaleString()}</strong> pages
          </p>
        </div>

        {!normalizedQuery && (
          <nav className={styles.toc} aria-label="Sitemap sections">
            {sections.map((section) => (
              <a
                key={section.category}
                href={`#${slugify(section.label)}`}
                className={styles.tocLink}
              >
                {section.label}
                <span className={styles.tocCount}>{section.pages.length}</span>
              </a>
            ))}
          </nav>
        )}

        {filteredSections.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No pages match &ldquo;{query}&rdquo;</p>
            <button
              type="button"
              className={styles.clearButton}
              onClick={() => setQuery("")}
            >
              Clear search
            </button>
          </div>
        ) : (
          filteredSections.map((section) => (
            <section
              key={section.category}
              id={slugify(section.label)}
              className={styles.section}
            >
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{section.label}</h2>
                <span className={styles.sectionBadge}>
                  {section.pages.length} pages
                </span>
              </div>

              <div className={styles.flatCard}>
                <PageLinks pages={section.pages} />
              </div>
            </section>
          ))
        )}
      </div>

      <button
        type="button"
        className={`${styles.backToTop} ${showBackToTop ? styles.backToTopVisible : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}
