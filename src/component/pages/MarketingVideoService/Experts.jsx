import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const Experts = () => {
    const title = "Experts Focused on Delivering Creative<br/>Marketing Video Solutions";
    const description = "Your video deserves more than a template approach. Our team includes:";
    const data = [
        {
            "title": "Directors & Producers",
            "description": "Lead the creative vision, oversee production, and ensure every video aligns with your brand goals.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s49.png"
        },
        {
            "title": "Cinematographers & Animators",
            "description": "Capture stunning visuals and bring concepts to life through motion graphics and animation.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s69.png"
        },
        {
            "title": "Scriptwriters & Storyboard Artists",
            "description": "Craft compelling narratives and visual blueprints that guide the storytelling process.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s70.png"
        },
        {
            "title": "Video Marketing Strategists",
            "description": "Plan distribution, optimize content for target audiences, and ensure videos deliver measurable results.",
            "bgcolor": "#6d3119", 
            "logo": "/images/square-images/s20.png"
        }
    ];

    const footerText = "Every expert brings experience in storytelling, marketing, and technology to craft videos<br/>that perform and inspire.";

    return (
        <CommonGridBox3Scrollable 
            title={title} 
            description={description} 
            data={data} 
            footer={footerText}
        />
    );
}