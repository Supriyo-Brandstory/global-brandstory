import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const WhoWeEmpower = () => {
    const title = "Who We Empower";
    const description = "We Provide Software Maintenance And Support For:";
    const footer = "Our Experience Spans Fintech, E-Commerce, Healthcare, SaaS, And More.";
    const data = [
        {
            "title": "Scaling Startups",
            "description": `
                We help emerging businesses maintain and expand their applications efficiently, ensuring smooth performance and reliability as user demand increases.
            `
        },
        {
            "title": "Established Enterprises",
            "description": `
               For large organizations with complex systems, we offer end-to-end maintenance that keeps operations secure and adaptable to evolving business goals.
            `
        },
        {
            "title": "Modernizing Companies",
            "description": `
               We revitalize legacy systems, reduce technical debt, and enhance performance to meet modern standards of speed and scalability.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}