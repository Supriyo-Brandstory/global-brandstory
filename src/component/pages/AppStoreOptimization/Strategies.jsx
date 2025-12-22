import React from 'react';
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const Strategies = () => {
    const title = "Strategies That Drive Results";
    const description = "We focus on strategies that are algorithm-resilient and user-centric:";
    const data = [
          {
            "title": "Advanced Keyword Research",
            "description": "We go beyond basic keywords to identify long-tail, conversational, and geo-specific terms that attract the most relevant users. This ensures your app reaches the right audience, increasing downloads from users who are genuinely interested in your offering.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png" // Replace with actual ASO icon path if different
          },
          {
            "title": "Visual Asset Optimization",
            "description": "First impressions matter. We create eye-catching icons, screenshots, and video previews that tell your app's story at a glance. Each visual element is designed to engage, inform, and persuade potential users to download your app.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s5.png"
          },
          {
            "title": "Ratings & Review Management",
            "description": "Positive reviews build credibility, while constructive feedback provides insights for improvement. We actively manage ratings and reviews, respond professionally, and implement strategies that enhance your app's reputation and trustworthiness.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s9.png"
          },
          {
            "title": "Full Listing Localization",
            "description": "Expanding globally requires more than translation. We provide full localization of your app listing, adapting language, visuals, and keywords to resonate culturally with each target market, helping you reach new users worldwide.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s20.png"
          },
          {
            "title": "Algorithm-Resilient Strategy",
            "description": "App store algorithms constantly evolve. Our ASO strategies are adaptable and resilient, allowing your app to maintain high visibility and downloads despite changes in App Store or Google Play ranking algorithms.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s31.png"
          }
        ];
        const footer = "We focus on strategies that are algorithm-resilient and user-centric:"
    return (
        <CommonGridBox3Scrollable boxHeight='380px' footer={footer} title={title} description={description} data={data} />
    );
}