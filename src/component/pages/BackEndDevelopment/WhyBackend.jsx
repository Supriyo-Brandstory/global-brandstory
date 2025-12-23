import styles from '@/style/marketingAutomation.module.css'

export const WhyBackend = () => {
    return (
        <div className={`${styles.frame} py-30 text-center`}>   
            <h2>Why Back-End Development Is Key for<br/>Digital Success</h2><br />
            <p>
                Your front-end might be sleek, fast, and user-friendly, but it’s the back-end that keeps your application running. From server-side logic and API integrations to database management and cloud deployment, a robust back-end is the silent engine that drives performance.
            </p><br />
            <p>
                A scalable back-end ensures your app handles high traffic, processes transactions securely, and delivers the reliability users expect. Without it, even the best UI can’t prevent slow load times, data breaches, or service interruptions—issues that damage trust and impact your growth.
            </p>
        </div>
    )
}