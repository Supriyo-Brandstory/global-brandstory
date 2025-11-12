import CommonGridBox3 from "../common/CommonGridBox3";

export const HowOurData = () => {
    
    const title = "How Our Data Analytics<br/>Consulting Services Work";
    const description = "Our data analytics consulting services guide you through every step, whether you’re starting from scratch or looking to level up.<br/>Here’s what we focus on:";
    const data = [
        {
            "title": "Setting goals that match your business stage",   
            "description": "We help you define what success looks like, whether it's better customer retention, improved margins, or smarter forecasting.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s26.png"
        },
        {
            "title": "Choosing tools that make things easier, not harder",   
            "description": "You don’t need every platform out there. You need the right ones, tuned to your team’s skill level and your business needs.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s31.png"
        },
        {
            "title": "Creating a roadmap that works today and tomorrow",   
            "description": "As your company grows, your data needs will change. We build plans that scale with you, so you’re not constantly rebuilding from scratch.",
            "bgcolor": "#c1ba9cff",
            "logo": "/images/square-images/s36.png"
        }
    ];
    
    return (
        <CommonGridBox3 
            boxHeight="350px"
            title={title}
            description={description}
            data={data} 
        />
    );
}
