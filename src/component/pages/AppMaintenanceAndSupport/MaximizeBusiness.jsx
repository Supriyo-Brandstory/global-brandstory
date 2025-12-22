import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const MaximizeBusiness = () => {
    const title = "Maximize Business Value with Smart App Maintenance";
    const description = "Our expert app maintenance solutions help businesses stay ahead, save costs, and deliver flawless digital experiences. See how our application maintenance and support services transform businesses by boosting performance, security, and ROI.";
    const footer = "";
    const data = [
        {
            "title": "AI, ML, and NLP Integration",
            "description": "Leverage AI-powered app maintenance with machine learning and NLP to predict issues, automate resolutions, and optimize performance across web and mobile platforms."
        },
        {
            "title": "Security and Compliance Ready",
            "description": "Our solutions ensure apps are secure, compliant, and safeguarded against vulnerabilities. It will give businesses peace of mind and uninterrupted operations."
        },
        {
            "title": "Cost Optimization & Better ROI",
            "description": "Effective app maintenance and proactive support reduce downtime and maintenance costs. This will maximize ROI while keeping your applications running at peak efficiency."
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description} footer={footer} cardData={data} />
    );
}