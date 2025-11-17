import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const BrandstorysTiktok = () => {
    const data = {
        heading: "BrandStory’s TikTok Growth & Engagement Solutions",
        subheading:
          "Growing on TikTok requires strategy, consistency, and content that moves with culture. We offer full-funnel TikTok video marketing services that take your brand from zero to viral with speed and precision.",
        cards: [
            {
              title: "TikTok Account Setup & Strategy",
              description:
                "We start by building a solid foundation for your TikTok presence. This includes in-depth audience research, defining your brand positioning, and creating a tailored growth plan that aligns with your business goals and target market.",
            },
            {
              title: "Short-Form Video Production",
              description:
                "Our team produces scroll-stopping, mobile-first content designed to engage users instantly. Each video is crafted with storytelling, trends, and clear messaging in mind to maximize watch time, shares, and interaction.",
            },
            {
              title: "Paid TikTok Ad Campaigns",
              description:
                "We manage end-to-end ad campaigns, from creative development to media buying. Using the platform’s best-performing ad formats, we ensure your budget drives measurable results, whether it’s clicks, conversions, or follower growth.",
            },
            {
              title: "Influencer Discovery & Management",
              description:
                "We identify and partner with TikTok creators who authentically match your brand voice. From outreach and contracts to content approvals, we handle the full process to deliver high-impact influencer campaigns.",
            },
            {
              title: "Hashtag Campaigns & Challenges",
              description:
                "We leverage trending hashtags and create custom challenges to boost visibility, encourage user participation, and spark organic content that amplifies your reach.",
            },
            {
              title: "Community Engagement",
              description:
                "Building real connections is key. We manage comments, replies, TikTok Live sessions, and follower interactions to foster loyalty, drive engagement, and turn casual viewers into a dedicated audience.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>
                With full-service TikTok campaign management and smooth TikTok influencer services, we ensure your brand stays relevant, on-trend, and positioned to grow, every single day.
            </p>
        </>
    )
}