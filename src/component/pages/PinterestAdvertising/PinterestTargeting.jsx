import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const PinterestTargeting = () => {
    const title = "Pinterest Targeting That Works"; 
    const description = "Reaching the right audience is key. Our Pinterest targeting helps your ads get seen by the right people."; 
    const footer = "Our framework ensures your ads reach people who are likely to engage and buy."; 
    const data = [
        {
            "title": "Keyword targeting", 
            "description": `
                We place your ads in front of users who search for products, ideas, or topics related to your business. This means your pins reach people who are already interested in what you offer, increasing the chances of clicks and conversions.
            `
        },
        {
            "title": "Interest targeting", 
            "description": `
               Pinterest users have a wide range of hobbies and passions. We connect with audiences based on these interests and lifestyles, ensuring your ads feel relevant and appealing to the right people.
            `
        },
        {
            "title": "Custom audiences", 
            "description": `
               You can reconnect with existing customers or target lookalike audiences who share similar behaviors and preferences. This helps expand your reach while staying focused on potential buyers who are most likely to take action.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
        </>
    );
}