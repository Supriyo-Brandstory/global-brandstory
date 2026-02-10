"use client";
// CommonThreeCardBlur.jsx
import styles from '@/style/common/commonThreeCardBlur.module.css'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const CommonThreeCardBlur = ({ heading, subheading, data, footer }) => {
    return (
        <div className={styles.frame}>
            {heading && <h2 className={styles.heading} dangerouslySetInnerHTML={{ __html: heading }} />}
            {/* {subheading && <p className={styles.subHeading}>{subheading}</p>} */}
            {/* {subheading && <p className={styles.subHeading} dangerouslySetInnerHTML={{ __html: subheading }} />} */}
            {subheading && (typeof subheading === "string" ? (<p className={styles.subHeading} dangerouslySetInnerHTML={{ __html: subheading }} />) : (<BlocksRenderer content={subheading} blocks={{ paragraph: ({ children }) => (<p className='!text-white'>{children}</p>) }} />))}

            <div className={styles.cards}>
                {data.map((item, idx) => (
                    <div key={idx} className={styles.card} style={{ '--bg': `url(${item.bg})` }}>
                        <img src={item.logo} alt={item.title} className={styles.logo} />
                        <h3>{item.title}</h3>
                        {/* <p>{item.description}</p> */}
                        {item?.description && (typeof item?.description === "string" ? (<p>{item.description}</p>
                        ) : (<BlocksRenderer content={item.description} blocks={{paragraph:({children})=>(<p className='!text-[#ccc]'>{children}</p>)}} />))}
                    </div>
                ))}
            </div>
            {footer && (typeof footer === "string" ? (<p
                className={styles.footer}
                dangerouslySetInnerHTML={{ __html: String(footer || "") }}
            ></p>) : (<BlocksRenderer content={footer} blocks={{ paragraph: ({ children }) => (<p className='!text-[#ccc]'>{children}</p>) }} />))}
        </div>
    )
}
