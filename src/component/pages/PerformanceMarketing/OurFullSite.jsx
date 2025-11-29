import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurFullSite = () => {
    // Content extracted from the description provided after the image.
    const accordionData = [
        {
            title: "Paid Search Advertising (Google, Bing)",
            content: `Capture high intent search traffic with targeted ads that appear exactly when your audience is looking. Paid search delivers some of the highest ROIs when executed with precision. Our CTR averages 2x industry norms. We handle:<br/><br/><ul><li>Keyword research & match types</li><li>Responsive ad setup</li><li>Ad extensions</li><li>Conversion focused landing pages</li></ul>`,
        },
        {
            title: "Paid Social Campaigns (Meta, LinkedIn, TikTok, Pinterest)",
            content: `Paid social connects brands emotionally and we engineer that connection to convert. Create scroll stopping visuals and personalized ad journeys across platforms. We:<br/><br/><ul><li>Build platform specific creatives</li><li>Run lookalike & retargeting funnels</li><li>Manage campaign performance daily</li></ul>`,
        },
        {
            title: "Affiliate & Influencer Marketing",
            content: `Performance first partnerships that scale trust and awareness. The channels are not just about reach. They're about relevance. And relevance converts. We:<br/><br/><ul><li>Vet and onboard influencers</li><li>Integrate UTM tracking for ROI</li><li>Negotiate based on performance KPIs</li></ul>`,
        },
        {
            title: "Programmatic Display & Native Ads",
            content: `Automated, audience-driven display advertising that adapts in real time. It’s smart advertising, delivering the right message at the right time in the right place. We manage:<br/><br/><ul><li>Creative iterations</li><li>Contextual & behavioral targeting</li><li>Frequency caps</li></ul>`,
        },
        {
            title: "Conversion Rate Optimization (CRO)",
            content: `Traffic without conversion is wasted. Even a 1% lift in conversion can mean thousands in additional revenue. We:<br/><br/><ul><li>A/B test landing pages, CTAs, and product flows</li><li>Run heatmap & user behavior studies</li><li>Optimize form friction and checkout experience</li></ul>`,
        },
        {
            title: "Marketing Analytics & Reporting",
            content: `When you see exactly where ROI is coming from, better decisions follow. We build:<br/><br/><ul><li>Custom Looker Studio dashboards</li><li>Channel-level attribution reports</li><li>Forecasting models</li></ul>`,
        },
    ];

    return (
        <CommonAccordion2
            // Title and Description extracted from the image
            title="Our Full Suite of Performance Marketing Services"
            description="Brandstory offers a full suite of performance marketing solutions, built to move the needle at every stage of the funnel."
            items={accordionData}
            splitRatio={0.5}
        />
    );
};