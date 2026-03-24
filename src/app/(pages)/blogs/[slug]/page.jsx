import { Footer } from '@/component/pages/PrivacyPolicy/Footer';
import styles from '@/style/blogdetail.module.css';
import { getBlogBySlug } from '@/lib/services/api';
import TableOfContents from '@/component/pages/Blogs/blogTableOfContent';
import BlogContentRenderer from '@/component/pages/Blogs/BlogContentRenderer';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const response = await getBlogBySlug(slug);
    const blog = response?.data?.[0]?.attributes || response?.data?.[0];
    console.log("Blog Data for Metadata:", blog); // Debug log

    if (!blog) {
        return {
            title: "Blog Not Found",
        };
    }

    const { blogTitle, blogMetaTitle, blogMetaDescription, blogImage } = blog;
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
    const STRAPI_IMG_URL = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;
    const ogImageUrl = blogImage ? (blogImage.url.startsWith('http') ? blogImage.url : `${STRAPI_IMG_URL}${blogImage.url}`) : "";

    return {
        title: blogMetaTitle || blogTitle || "Blog Detail",
        description: blogMetaDescription || "Read our latest blog post.",
        alternates: {
            canonical: `https://globalbrandstory.com/blogs/${slug}`,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: blogMetaTitle || blogTitle,
            description: blogMetaDescription,
            url: `https://globalbrandstory.com/blogs/${slug}`,
            images: ogImageUrl ? [{ url: ogImageUrl }] : [],
        },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const blogData = await getBlogBySlug(slug);
    const blog = blogData?.data?.[0]?.attributes || blogData?.data?.[0];

    if (!blog) {
        notFound();
    }

    const { blogTitle, blogDate, blogImage, contentSection, blogQuote } = blog;

    // Extract headings for Table of Content from Dynamic Zone
    const dynamicHeadings = contentSection
        ?.filter(section => section.__component === 'element.blog-content')
        ?.flatMap(section =>
            section.blogContent
                ?.filter(block => block.type === 'heading' && block.level === 2)
                ?.map((block, index) => {
                    const text = block.children?.map(child => child.text).join('') || '';
                    const id = text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                    return { id: id || `heading-${index}`, text };
                })
        ) || [];

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
    const STRAPI_IMG_URL = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;
    const heroImageUrl = blogImage ? (blogImage.url.startsWith('http') ? blogImage.url : `${STRAPI_IMG_URL}${blogImage.url}`) : "/images/Blog/content-img-1.png";

    return (
        <div className={styles.page}>

            <div className={styles.bg}>
                <img src="/images/Blog/blog-bg-top.webp" alt="image" />
            </div>

            <main className={styles.container}>
                <div className={styles.layout}>

                    {/* LEFT – ARTICLE */}
                    <article className={styles.article}>
                        <header className={styles.header}>
                            <h1>{blogTitle || "What Makes Digital Experiences Truly Human"}</h1>
                            <div className={styles.meta}>
                                <span className={styles.date}>{blogDate || "January 2, 2026"}</span>
                            </div>
                        </header>
                        <button className={styles.bookmark} style={{display:"none"}}>
                            <img src="/images/share.png" alt="Bookmark" />
                        </button>

                        <img
                            className={styles.heroImage}
                            src={heroImageUrl}
                            alt={blogTitle || "Blog Hero"}
                        />

                        {/* RENDER DYNAMIC ZONE */}
                        {contentSection?.map((section, index) => {
                            if (section.__component === 'element.blog-content') {
                                return (
                                    <BlogContentRenderer
                                        key={index}
                                        content={section.blogContent}
                                        strapiUrl={STRAPI_URL}
                                    />
                                );
                            }
                            if (section.__component === 'element.blog-image') {
                                const sectionImg = section.blogImage;
                                if (!sectionImg) return null;
                                const sectionImgUrl = sectionImg.url.startsWith('http') ? sectionImg.url : `${STRAPI_IMG_URL}${sectionImg.url}`;
                                return (
                                    <img
                                        key={index}
                                        className={styles.inlineImage}
                                        src={sectionImgUrl}
                                        alt={sectionImg.alternativeText || ""}
                                    />
                                );
                            }
                            return null;
                        })}
                        <blockquote className={styles.quoteBlock}>
                            {`"${blogQuote}"`}
                        </blockquote>

                        <Footer />
                    </article>

                    {/* RIGHT – SIDEBAR */}
                    <aside className={styles.sidebar}>

                        <div className={styles.sidebarCard}>
                            <TableOfContents headings={dynamicHeadings} />
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Share</h4>
                            <div className={styles.socials}>
                                <img src="/images/contact-ico-facebook.svg" alt="Facebook" />
                                <img src="/images/contact-ico-instagram.svg" alt="Instagram" />
                                <img src="/images/contact-ico-linkedin.svg" alt="LinkedIn" />
                                <img src="/images/contact-ico-youtube.svg" alt="YouTube" />
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
