import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const Methods = () => {
    const title = "Methods That Enhance Viewer<br/>Engagement and Retention";
    const description = "We implement strategies like:";
    const data = [
        {
            "title": "Audience-Centric Storytelling",
            "description": "Every animation or video begins with a deep understanding of your audience. We focus on what drives their attention, emotions, and decisions, ensuring that your content resonates and inspires action.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png"
        },
        {
            "title": "Visual Consistency",
            "description": "From micro-animations and style frames to typography and color palettes, every element is designed to reflect your brand identity. Consistency across visuals strengthens recognition and builds trust with your audience.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s71.png"
        },
        {
            "title": "Cross-Platform Delivery",
            "description": "We optimize your content for multiple channels—Instagram, YouTube, websites, presentations, and more—so your message reaches viewers wherever they engage with your brand.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s46.png"
        },
        {
            "title": "Performance Tracking & Optimization",
            "description": "Engagement, conversions, and ROI are measured continuously. Insights from analytics inform improvements, ensuring each video not only captivates but drives meaningful results.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s20.png"
        }
    ];

    return (
        <CommonGridBox3Scrollable boxHeight='350px' title={title} description={description} data={data} />
    );
}