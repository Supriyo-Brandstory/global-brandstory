import styles from '@/style/marketingAutomation.module.css'

export const TheDevelopment = () => {
    return (
        <div className={`${styles.frame} py-30`}>   
            <h2>The Development Technology Behind Our Success</h2><br />
            <p>We leverage the right tools to deliver high-performing pages:</p>
            <br />
            <p>Our experts bring:</p>
            <br />
            <ul>
                <li><b>CMS Platforms</b><br />WordPress and Webflow for flexible, scalable, and easy-to-manage landing page solutions.</li>
                <li><b>Landing Page Builders</b><br />Unbounce, Instapage, and Leadpages for rapid deployment, testing, and optimization.</li>
                <li><b>Custom Code</b><br />HTML, CSS, and JavaScript development for unique, fully customized landing page requirements.</li>
                <li><b>Optimization Tools</b><br />Advanced heatmaps, conversion tracking, and A/B testing software to refine performance continuously.</li>
                <li><b>Analytics Platforms</b><br />Google Analytics, conversion dashboards, and ROI tracking tools that deliver actionable insights and transparent reporting.</li>
            </ul>
            <br />
            <p className='highlited-text'>These technologies ensure scalability, flexibility, and measurable results.</p>
        </div>
    )
}