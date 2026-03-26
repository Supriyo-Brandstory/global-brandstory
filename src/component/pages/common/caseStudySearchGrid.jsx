"use client";
import React, { useState, useMemo } from "react";
import styles from "@/style/common/commonGridSelector.module.css";
import { Search } from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function CaseStudySearchGrid({ title, tabs, pagination = {} }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const queryFromUrl = searchParams.get("query") || "";
    const [searchQuery, setSearchQuery] = useState(queryFromUrl);

    const { page = 1, pageSize = 12, pageCount = 1, total = 0 } = pagination;

    React.useEffect(() => {
        setSearchQuery(queryFromUrl);
    }, [queryFromUrl]);

    React.useEffect(() => {
        if (searchQuery === queryFromUrl) return;

        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            const trimmedQuery = searchQuery.trim();

            if (trimmedQuery) {
                params.set("query", trimmedQuery);
            } else {
                params.delete("query");
            }

            params.set("page", "1");
            router.push(`?${params.toString()}`, { scroll: false });
        }, 500);

        return () => clearTimeout(handler);
    }, [searchQuery, router, searchParams, queryFromUrl]);

    const allCards = useMemo(() => {
        const flattened = tabs.flatMap(tab =>
            tab.cards.map(card => ({
                ...card,
                tabName: tab.name
            }))
        );

        return flattened.sort(
            (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    }, [tabs]);

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > pageCount) return;
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const getVisiblePages = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= pageCount; i++) {
            if (i === 1 || i === pageCount || (i >= page - delta && i <= page + delta)) {
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

    const visiblePages = getVisiblePages();

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.layout}>
                    <div
                        className={styles.title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    <div className={styles.searchContainer}>
                        <div className={styles.searchWrapper}>
                            <Search className={styles.searchIcon} size={20} />
                            <input
                                type="text"
                                placeholder="Search by project, category or description..."
                                className={styles.searchInput}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.cardsGrid}>
                        {allCards.length > 0 ? (
                            allCards.map((card, i) => (
                                <div key={i} className={styles.card}>
                                    {card.image && (
                                        <div className={styles.cardImageWrapper}>
                                            <img
                                                src={card.image}
                                                className={styles.cardImage}
                                                alt={card.title}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}

                                    <div className={styles.cardContent}>
                                        <p className={styles.cardCategory}>{card.category}</p>
                                        <h3 className={styles.cardTitle}>{card.title}</h3>
                                        {card.description && typeof card.description === "string" ? (
                                            <p className={styles.cardDescription}>{card.description}</p>
                                        ) : (
                                            <div
                                                className={styles.cardDescription}
                                            >
                                                <BlocksRenderer content={card.description} blocks={{ paragraph: ({ children }) => <p className={styles.cardDescription}>{children}</p> }} />
                                            </div>
                                        )}
                                        <a href={card.buttonLink} className={styles.cardButton}>
                                            <span>{card.buttonText}</span>
                                            <img src="/images/box-arrow.svg" alt="arrow" className={styles.icon} />
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={styles.noResults}>
                                No case studies found matching "{searchQuery}"
                            </div>
                        )}
                    </div>

                    {/* PAGINATION */}
                    {pageCount > 1 && (
                        <div className={styles.pagination}>
                            <button
                                className={styles.pageBtn}
                                disabled={page === 1}
                                onClick={() => handlePageChange(page - 1)}
                            >
                                «
                            </button>

                            {visiblePages.map((p, index) => (
                                <button
                                    key={index}
                                    className={`${styles.pageBtn} ${page === p ? styles.activePage : ""} ${p === '...' ? styles.dots : ""}`}
                                    onClick={() => p !== '...' && handlePageChange(p)}
                                    disabled={p === '...'}
                                >
                                    {p}
                                </button>
                            ))}

                            <button
                                className={styles.pageBtn}
                                disabled={page === pageCount}
                                onClick={() => handlePageChange(page + 1)}
                            >
                                »
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}
