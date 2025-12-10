import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const MeetTheExperts = () => {
    const title = "Meet the Experts Powering Your Data Systems";
    const description = "Our Team Is Made Up Of Experienced Database Developers, Architects, And Data Engineers.";
    const footer = "When You Work With Us, You Get A Team Committed To Building Systems That Work Reliably Today And Scale For Tomorrow.";
    const data = [
        {
            "title": "Technical Expertise",
            "description": `
                Our team is skilled in SQL, NoSQL, cloud platforms, and data warehousing, ensuring we can handle diverse and complex database environments.
            `
        },
        {
            "title": "Performance & Optimization Specialists",
            "description": `
               We focus on database performance, migration, and optimization, ensuring systems run efficiently and reliably.
            `
        },
        {
            "title": "ROI-Focused Approach",
            "description": `
               By reducing technical debt and optimizing architecture, we help you maximize the long-term value of your database investments.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}