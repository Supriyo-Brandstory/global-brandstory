// CommonThreeCardBlur.jsx
import styles from '@/style/common/commonThreeCardBlur.module.css'

export const CommonThreeCardBlur = ({ data })=>{
    return(
        <div className={styles.frame}>
            <h1 className={styles.heading}>Our Social Media Tools and Platforms</h1>
            <p className={styles.subHeading}>
                To manage campaigns efficiently, we use a mix of tools. 
                Our social media marketing tools help with scheduling, analytics, and content creation:
            </p>

            <div className={styles.cards}>
                {data.map((item, idx)=>(
                    <div key={idx} className={styles.card}>
                        <img src={item.logo} alt={item.title} className={styles.logo}/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            <p className={styles.footer}>
                These tools let us save time, stay organized, and focus on strategies that bring results.
            </p>
        </div>
    )
}
