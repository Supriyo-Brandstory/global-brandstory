'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import styles from '@/style/blogdetail.module.css';

export default function BlogContentRenderer({ content, strapiUrl }) {
    if (!content) return null;

    const extractText = (nodes) => {
        if (!nodes) return '';
        if (typeof nodes === 'string') return nodes;
        if (Array.isArray(nodes)) return nodes.map(extractText).join('');
        // Handle React elements (from Strapi blocks renderer)
        if (nodes.props?.children) return extractText(nodes.props.children);
        if (nodes.props?.text) return nodes.props.text;
        return '';
    };

    return (
        <div className={styles.blogBodyContent}>
            <BlocksRenderer
                content={content}
                blocks={{
                    heading: ({ children, level }) => {
                        const text = extractText(children);
                        const id = text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                        const Tag = `h${level}`;
                        return <Tag id={id}>{children}</Tag>;
                    },
                    paragraph: ({ children }) => <p className={styles.intro}>{children}</p>,
                    list: ({ children, format }) => {
                        if (format === 'ordered') return <ol>{children}</ol>;
                        return <ul className={styles.accentList}>{children}</ul>;
                    },
                    quote: ({ children }) => <blockquote className={styles.quoteBlock}>{children}</blockquote>,
                }}
            />
        </div>
    );
}
