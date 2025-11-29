import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const Platforms = () => {
    const title = "Platforms and Tools We Operate On";
    const description = "As a tech-savvy performance marketing agency, we integrate with leading platforms to power smarter campaigns.";
    const footer = "";
    const data = [
        {
            "title": "Ad Platforms",
            "description": `
                We use ad platforms including Google Ads (Search, Display, Performance Max), Meta Ads for Facebook and Instagram, LinkedIn Ads for B2B lead generation, YouTube for video driven performance, and Programmatic DSPs for contextual and behavioral targeting.
            `
        },
        {
            "title": "Analytics & Reporting",
            "description": `
               Our analytics stack combines Google Analytics 4 (GA4), Google Tag Manager, and Looker Studio for real time insights. We also integrate HubSpot CRM, Mixpanel, and Amplitude to deliver transparent, data-driven performance reporting.
            `
        },
        {
            "title": "Automation & CRM Integrations",
            "description": `
               Through HubSpot workflows, Zapier automations, and Salesforce connectors, we streamline marketing operations. API-based integrations ensure accurate ROI tracking and seamless data flow across your performance ecosystem.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
        </>
    );
}