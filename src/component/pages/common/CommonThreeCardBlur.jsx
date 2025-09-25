// CommonThreeCardBlur.jsx
import styles from '@/style/common/commonThreeCardBlur.module.css'

export const CommonThreeCardBlur = ({heading, subheading, data, footer })=>{
    return(
        <div className={styles.frame}>
            {heading && <h2 className={styles.heading}>{heading}</h2>}
            {/* {subheading && <p className={styles.subHeading}>{subheading}</p>} */}
            {subheading && <p className={styles.subHeading} dangerouslySetInnerHTML={{ __html: subheading }}></p>}

            <div className={styles.cards}>
                {data.map((item, idx)=>(
                    <div key={idx} className={styles.card} style={{'--bg':`url(${item.bg})`}}>
                        <img src={item.logo} alt={item.title} className={styles.logo}/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <p
              className={styles.footer}
              dangerouslySetInnerHTML={{ __html: String(footer || "") }}
            ></p>
        </div>
    )
}
