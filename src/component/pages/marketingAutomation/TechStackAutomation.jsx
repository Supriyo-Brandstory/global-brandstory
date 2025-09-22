import styles from '@/style/marketingAutomation.module.css'
export const TechStackAutomation =()=>{
    return (
        <div className={styles.frame}>
            <h2>Our Technology Stack for Automation</h2>
            <p>
                We use the best tools to make marketing automation work smoothly for your business. Some of the platforms we work with include: <span className='highlited-text'>HubSpot</span>, <span className='highlited-text'>Marketo</span>, <span className='highlited-text'>Pardot</span>, <span className='highlited-text'>ActiveCampaign</span>, <span className='highlited-text'>Mailchimp</span>, <span className='highlited-text'>Klaviyo</span>, and <span className='highlited-text'>Zoho CRM</span>.
            </p> <br />
            <p>
                We pick the right platform based on your business type and goals. Our team sets everything up, moves your existing data if needed, and keeps everything running perfectly.
            </p><br />
            <p>
                The right tools make your campaigns easier to manage, faster to run, and more effective at reaching the right customers at the right time. With smart automation, your marketing works harder without extra effort from you.
            </p>
        </div>
    )
}