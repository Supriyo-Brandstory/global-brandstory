import { CommonBwCrd } from "../common/CommonBwCard"

export const IndustriesTransformed = () => {
    const title = "";
    const description = "";
    const footer = "";
    const data = [
        {
            "description": `
            <h2>Our Vision</h2><br/>
            <p>To redefine how the world experiences brands — turning strategy into story and businesses into movements that drive cultural and commercial impact.</p><br/>
            <p>We envision a world where both B2B and B2C brands transcend categories, lead with purpose, and build lasting human connections.</p><br/>
            <p>Where creativity is measurable, performance is intentional, and every brand touchpoint adds meaningful value.</p>
            `
        },
        {
            "description": `
            <h2>Our Mission</h2><br/>
            <p>To build bold, high-performing brands that own their space, earn trust, and convert attention into meaningful growth — across both business and consumer markets.</p><br/>
            <p>We align the story with strategy, data with design, and ambition with execution; we help our clients lead their category, shift perception, and accelerate demand at scale.</p><br/>
            <p>Build the brand. Drive the demand. Deliver the growth.</p>
            `
        }
    ];
    return (
        <CommonBwCrd title={title} description={description} footer={footer} cardData={data} />
    );
}