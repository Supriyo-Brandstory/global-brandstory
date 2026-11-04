"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import SafeImg from "./SafeImg";
import styles from "@/style/common/locationLatestBlogs.module.css";

/** Same fallback as the blog listing page (CommonBlogs). */
const FALLBACK_BLOG_IMAGE = "https://picsum.photos/id/1/600/400";

function resolveMediaUrl(media, strapiUrl) {
  const raw =
    media?.url ||
    media?.formats?.medium?.url ||
    media?.formats?.small?.url ||
    media?.formats?.thumbnail?.url ||
    media?.data?.attributes?.url ||
    media?.attributes?.url;

  if (!raw) return null;
  if (
    raw.startsWith("http://") ||
    raw.startsWith("https://") ||
    raw.startsWith("data:")
  ) {
    return raw;
  }

  const base = (strapiUrl || "").replace(/\/$/, "");
  if (!base) return raw.startsWith("/") ? raw : `/${raw}`;
  return `${base}${raw.startsWith("/") ? raw : `/${raw}`}`;
}

function normalizeBlogs(blogs = [], strapiUrl) {
  return blogs
    .map((blog) => {
      const item = blog?.attributes || blog;
      const categories = (item.blog_categories || [])
        .map((cat) => cat?.catName || cat?.attributes?.catName)
        .filter(Boolean);
      const imageUrl = resolveMediaUrl(
        item.blogImage?.data?.attributes || item.blogImage,
        strapiUrl
      );

      if (!item?.blogSlug || !item?.blogTitle) return null;

      return {
        id: item.id || blog.id || item.blogSlug,
        title: item.blogTitle,
        slug: item.blogSlug,
        category: categories[0] || "Blog",
        image: imageUrl || FALLBACK_BLOG_IMAGE,
        href: `/blogs/${item.blogSlug}`,
      };
    })
    .filter(Boolean);
}

export default function LocationLatestBlogs({ blogs = [] }) {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE || "";
  const items = normalizeBlogs(blogs, strapiUrl);
  const [swiperInstance, setSwiperInstance] = useState(null);

  if (!items.length) return null;

  const canLoop = items.length > 4;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.accentLine} aria-hidden="true" />
          <h2 className={styles.heading}>
            Latest from <span className={styles.orangeText}>Our Blog</span>
          </h2>
          <p className={styles.subtitle}>
            Insights, strategies and ideas to help your business grow.
          </p>
        </div>

        <div className={styles.sliderWrap}>
          {items.length > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navPrev}`}
              aria-label="Previous blogs"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={18}
            slidesPerView={4}
            grabCursor
            loop={canLoop}
            speed={600}
            watchOverflow
            breakpoints={{
              0: { slidesPerView: 1.15, spaceBetween: 12 },
              560: { slidesPerView: 2, spaceBetween: 14 },
              900: { slidesPerView: 3, spaceBetween: 16 },
              1100: { slidesPerView: 4, spaceBetween: 18 },
            }}
            className={styles.swiper}
          >
            {items.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Link href={blog.href} className={styles.card}>
                  <div className={styles.imageWrap}>
                    {blog.image && (
                      <SafeImg
                        src={blog.image}
                        alt={blog.title}
                      />
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.category}>{blog.category}</p>
                    <h3 className={styles.title}>{blog.title}</h3>
                    <span className={styles.readMore}>
                      Read More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {items.length > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navNext}`}
              aria-label="Next blogs"
              onClick={() => swiperInstance?.slideNext()}
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
