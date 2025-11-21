import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const MeetOur = () => {
    const title = "Meet Our Content Experts";
    const description = "Our Team Is Experienced, Passionate, And Hands-On. From Writers And Strategists To Editors, Our Content Development Experts:";
    const footer = "Each Strategist Brings Hands-On Expertise To Ensure Your Strategy Is Actionable And Impactful.";
    const data = [
        {
            "title": "Engaging Storytellers",
            "description": `
                We know how to craft content that connects with people, not just algorithms.
            `
        },
        {
            "title": "Audience-First Thinkers",
            "description": `
               We dig into what your audience cares about, so every piece speaks to their needs and challenges.
            `
        },
        {
            "title": "Quality-Driven Experts",
            "description": `
               From blogs and guides to videos and campaigns, we deliver consistent, high-quality content across all formats.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} paddingBottom="0px" />
    );
}