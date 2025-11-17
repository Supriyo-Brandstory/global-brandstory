import styles from '@/style/marketingAutomation.module.css'

export const HowMuch = () => {
    return (
        <div className={`${styles.frame} py-30`}>   
            <h2>How Much Does TikTok Advertising Cost?</h2><br />
    <p>
        Here’s a transparent breakdown of common investment ranges:
    </p><br />

    <ul>
        <li>
            <b>Minimum TikTok advertising budget</b>
            <p>₹50,000/month (recommended)</p>
        </li><br />
        <li>
            <b>TikTok CPC pricing</b>
            <p>₹8–₹30 per click (varies by niche, targeting)</p>
        </li><br />
        <li>
            <b>Creative production</b>
            <p>Starts at ₹10,000/video (scripting, filming, editing)</p>
        </li><br />
        <li>
            <b>Agency fee</b>
            <p>Starts at ₹20,000/month with monthly reporting included</p>
        </li>
    </ul>
    <p>
        For brands scaling aggressively, we also offer bundled content + media packages.
    </p>
        </div>
    )
}