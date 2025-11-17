import styles from '@/style/marketingAutomation.module.css'

export const WhyLinkedin = () => {
    return (
        <div className={`${styles.frame} py-30`}>   
            <h2>Why LinkedIn is the B2B Platform of Choice</h2><br />
            <p>
                When it comes to reaching real decision makers in a business context, no other platform comes close. The power of LinkedIn lies not just in its scale but in the intent and credibility of its users.
            </p><br />

            <ul>
                <li>
                    <b>With over 1 billion members, the LinkedIn audience is made up of professionals who are actively seeking insights, partnerships, and solutions.</b>
                </li>
                <li>
                    <b>LinkedIn is purpose-built for professionals. This is why 96% of B2B marketers rely on it to distribute content. It’s also why 80% of all B2B leads from social media are generated on LinkedIn.</b>
                </li>
                <li>
                    <b>From IT buyers and finance directors to founders and procurement leaders, the people that drive purchasing decisions are here. In fact, 4 out of 5 LinkedIn users influence business decisions within their organizations.</b>
                </li>
            </ul>
            <p className='highlited-text'>
                This makes LinkedIn B2B marketing so effective. You’re speaking directly to people with budget, influence, and urgency. And because the platform authority is rooted in professional identity and verified company data, your messaging lands in a space built for trust.
            </p>
        </div>
    )
}