import styles from '@/style/ppc.module.css'

export const ThePeople = ()=>{
    return (
        <div className={styles.frame}>
            <h2 className={styles.heading}>The People Powering Our Projects</h2>
            <p className={styles.description}>
                Behind every successful engagement is a team of consultants who combine business intelligence with technical depth.
            </p>

            <p className={styles.subtext}>Our experts bring:</p>
            <ul className={styles.list}>
                <li>Years of experience in custom software consulting and IT strategy</li>
                <li>A track record of guiding startups, scale-ups, and enterprises through complex transformations</li>
                <li>Specialized knowledge in industries ranging from retail and SaaS to manufacturing and services</li>
            </ul>

            <p className={styles.highlight}>
                At BrandStory, you’re working with strategists who understand the realities of business.
            </p>
        </div>
    )
}