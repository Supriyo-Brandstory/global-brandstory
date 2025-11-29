import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const OptimizingAd = () => {
    const title = "Optimizing Ad Spend for Maximum ROI"; 
    const description = "";
    const footer = "";
    
    const data = [
        {
            "title": "Smart Bidding Strategies",
            "description": `
                AI-powered bidding models such as Target CPA, Maximize Conversions, and tROAS are selected based on campaign maturity, data availability, and performance history. These models align bidding with business goals, helping scale conversions while keeping acquisition costs firmly under control.
            `
        },
        {
            "title": "Real-Time Budget Adjustments",
            "description": `
               Daily budget pacing ensures no dollar is wasted. Campaigns that underperform are paused or refined instantly, while top-performing, high-ROAS campaigns receive priority funding. This agility allows for rapid scaling of what works and fast removal of what doesn't.
            `
        },
        {
            "title": "ROAS-Focused Planning",
            "description": `
               Every budget decision is backed by forecasting models, seasonal trends, and historical benchmarks. For brands partnering with a growth-focused Google Ads Agency, this approach ensures that every investment is tied to measurable return targets – avoiding vanity metrics and focusing purely on ROI.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}