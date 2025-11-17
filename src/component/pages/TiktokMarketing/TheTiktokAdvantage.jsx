import CommonStatsSection from '../common/CommonStats';

export const TheTiktokAdvantage = () => {
    return (
        <CommonStatsSection
            title="The TikTok Advantage: Why Fast-Growing Brands Choose This Platform"
            description={[
                "TikTok has changed how people discover content and how brands get noticed. With over 1.7 billion users worldwide, it's especially powerful for reaching younger, mobile-first audiences.",
                "What makes TikTok unique is its algorithm: Every video can go viral, no matter the follower count or ad spend. This gives small businesses and emerging brands a real chance to stand out.",
                "From product launches to creative campaigns, TikTok is the platform for brands that want fast growth, high engagement, and to lead the conversation."
            ]}
            stats={[
                { value: "500M+", label: "TikTok video views delivered" },
                { value: "10M+", label: "Engagements (likes, shares, comments) generated" },
                { value: "2M+", label: "Clicks to websites, landing pages, or apps" },
            ]}
        />
    )
}