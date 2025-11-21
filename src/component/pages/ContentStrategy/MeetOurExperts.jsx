import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const MeetOurExperts = () => {
    const title = "Meet Our Content Strategy Experts";
    const description = "Our team of content strategy experts combines experience, creativity, and data-driven insights:";
    const footer = "Each strategist brings hands-on expertise to ensure your strategy is actionable and impactful.";
    const data = [
        {
            "title": "Certified Experts",
            "description": `
                Strategists with over 10 years of experience in digital marketing, ensuring every plan is rooted in best practices.
            `
        },
        {
            "title": "Proven Track Record",
            "description": `
               Industry leaders who have successfully executed content strategies for 500+ clients across sectors.
            `
        },
        {
            "title": "Thought Leadership",
            "description": `
               Professionals shaping modern content practices and bringing innovative approaches to every project.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} paddingBottom="0px" />
    );
}