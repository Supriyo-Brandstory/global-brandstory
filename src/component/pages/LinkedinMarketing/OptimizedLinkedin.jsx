import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const OptimizedLinkedin = () => {
    const data = {
        heading: "Optimized LinkedIn Campaigns to Reach the Right B2B Audience",
        subheading:
          "We build end-to-end LinkedIn strategies that target decision-makers, nurture intent, and convert engagement into high-quality B2B leads — all with precision, scale, and measurable ROI.",
        cards: [
            {
              title: "Tailored Campaign Strategy",
              description:
                "Every campaign starts with a clear, data-driven plan. We define your ideal audience using LinkedIn’s advanced targeting filters—industry, job role, seniority, and company size—and map content, creatives, and retargeting flows to your sales funnel for consistent, scalable growth.",
            },
            {
              title: "Company Page Optimization",
              description:
                "Your LinkedIn page is your digital storefront. We optimize visuals, profile information, and showcase client successes and services to reflect credibility, attract the right audience, and convert visitors into leads.",
            },
            {
              title: "Content Creation & Thought Leadership",
              description:
                "From educational posts to long-form articles, carousels, polls, and visual-first storytelling, we craft content that positions your brand as a trusted authority while driving engagement and industry conversation.",
            },
            {
              title: "Employee Advocacy & Leadership Branding",
              description:
                "We empower your leadership team and employees to amplify your brand’s message. Using executive support, branded templates, and training, your people become authentic brand ambassadors, increasing reach, engagement, and credibility.",
            },
            {
              title: "LinkedIn Ads & Precision Targeting",
              description:
                "Our ad campaigns use Sponsored Content, InMail, Conversation Ads, and Native Lead Gen Forms. Combined with advanced targeting (ABM lists, CRM segments, and behavioral filters), every campaign focuses on reaching decision-makers efficiently and generating high-quality leads.",
            },
            {
              title: "Retargeting & Funnel Segmentation",
              description:
                "We keep your brand top-of-mind with custom retargeting, segmenting audiences by engagement and funnel stage. Relevant content like case studies, webinars, or whitepapers nurtures prospects from early interest to qualified pipeline with minimal waste.",
            },
            {
              title: "Lead Generation Tools",
              description:
                "Native lead forms, gated content, chatbots, and calendar integrations streamline conversions, reduce friction, and make it easy for interested prospects to engage, sign up, or request a demo.",
            },
            {
              title: "Event, Webinar & Video Promotion",
              description:
                "From LinkedIn event ads to pre/post-event video campaigns and automated webinar follow-ups, we turn every live session or content drop into a measurable lead generation opportunity.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30 text-[#FF6347]'>
                We’ve Driven B2B Growth on LinkedIn Before — And We’ll Do It Better for You.
            </p>
        </>
    )
}