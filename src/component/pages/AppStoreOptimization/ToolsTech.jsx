import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const ToolsTech = () => {
    const title = "Tools & Technology We Use";
    const description = "To deliver precise, actionable insights, we leverage industry-leading tools:";
    const footer = "Our tech stack ensures every optimization decision is data-driven, measurable, and results-oriented.";
    const data = [
        {
            "title": "Keyword Tracking & Visual Testing Platforms",
            "description": "We use advanced keyword tracking tools to monitor rankings, search volume shifts, and competitor movements with precision. Through visual A/B testing platforms, we experiment with icons, screenshots, and preview videos to identify the highest converting creatives."
        },
        {
            "title": "Review Monitoring & Performance Dashboards",
            "description": "Our review monitoring software tracks user feedback, ratings, and sentiment so we can respond quickly and strengthen long term trust. App performance dashboards give us real-time insights into app health, user behavior, and key metrics that power strategic optimization."
        },
        {
            "title": "Localization & Global Optimization Solutions",
            "description": "For apps targeting international markets, we use industry leading localization and translation tools to ensure cultural accuracy and relevancy. These platforms help us adapt metadata, creatives, and in-app copy so your app connects smoothly with global audiences."
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description} footer={footer} cardData={data} />
    );
}