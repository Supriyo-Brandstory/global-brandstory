import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const WhyTiktok = () => {
    const title = "Why TikTok Ads Outperform Traditional Platforms";
    const description = "TikTok’s Ad Environment Is Fundamentally Different From Instagram Or YouTube:";
    const footer = "";
    const data = [
        {
            "title": "Algorithm Over Follower Count",
            "description": `
                On TikTok, reach isn’t limited to the size of the following. The **algorithm prioritizes content quality and engagement signals**, meaning even new accounts can see videos reach millions of users when the creative resonates. This levels the playing field for emerging brands and allows ad campaigns to scale faster.
            `
        },
        {
            "title": "Immersive Experience",
            "description": `
               Every TikTok ad takes over the **full mobile screen in vertical format, with sound-on by default**. This high-immersion environment eliminates competing distractions and keeps viewers' attention locked in, leading to stronger message retention and higher click-through rates.
            `
        },
        {
            "title": "Higher Shareability",
            "description": `
               Ads are designed to feel like **native content, not interruptive promotions**. When an ad entertains, educates, or inspires, users are far more likely to share it, extending reach organically without additional ad spend.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="40px" title={title} description={description}  footer={footer} cardData={data} />
        </>
    );
}