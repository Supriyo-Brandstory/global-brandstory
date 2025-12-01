import CommonStatsSection from '../common/CommonStats';

export const BreakingTheRules =()=>{
    return(
        <CommonStatsSection
      title="Breaking the Rules of<br/> Traditional Marketing with<br/> TikTok"
      description={[
        "TikTok’s growth trajectory has been nothing short of meteoric. From small startups to Fortune 500 brands, companies are shifting media budgets toward TikTok because the platform delivers:",
        "Our Stack Includes:",
        "<ul><li>1B+ monthly active users worldwide, with deep penetration across Gen Z, Gen Alpha, and Millennial segments</li><li>Engagement rates up to 2–3x higher than traditional social platforms</li><li>A content-first algorithm that favors creativity over follower count</li></ul>",
        "For Businesses Aiming To Build Relevance, Awareness, And Revenue, TikTok Is Essential."
      ]}
      stats={[
        { value: "4x", label: "Average return on ad spend (ROAS) in the first 90 days" },
        { value: "35%", label: "lower cost per acquisition compared to other platforms" },
        { value: "2.5x", label: "Higher engagement rates with native, trend-driven content" },
      ]}
      />
    )
}