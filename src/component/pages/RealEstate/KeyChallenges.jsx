import CommonAccordion2 from '../common/CommonAccordion2';

export const KeyChallenges = () => {
    const accordionData = [
        {
            title: "Rising Cost per Lead",
            content: "",
        },
        {
            title: "Low-Quality Enquiries",
            content: "",
        },
        {
            title: "Poor Landing Page Conversions",
            content: "",
        },
        {
            title: "Channel Partner Dependency",
            content: "",
        },
        {
            title: "Weak Project Differentiation",
            content: "",
        },
        {
            title: "Limited Funnel Tracking",
            content: "",
        },
    ];

    return (
        <CommonAccordion2
            title="Key Challenges in Real Estate"
            items={accordionData}
        />
    );
};