import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";


export const HowBs = () => {
    
    const title = "How BrandStory Drives Meaningful Content Results";
    const description = "";
    const data = [
        {
            "title": "Strategies Built for Your Business",   
            "description": "Every content plan we create is rooted in your business objectives. From defining goals to selecting the right formats and channels, we make sure your content works toward measurable outcomes.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s20.png"
        },
        {
            "title": "Audience-First Approach",   
            "description": "We research and analyze your target audience to craft content that truly resonates. Understanding their behaviors, preferences, and pain points allows us to create messaging that engages and converts.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s21.png"
        },
        {
            "title": "Seamless End-to-End Execution",   
            "description": "We manage the entire content lifecycle—auditing existing content, planning new initiatives, publishing, and optimizing—so you have a consistent, high-performing content system.",
            "bgcolor": "#c1ba9cff",
            "logo": "/images/square-images/s22.png"
        },
        {
            "title": "Measurable Impact",   
            "description": "Our work isn’t just about producing content—it’s about delivering results. We track engagement, conversions, and ROI to ensure every campaign drives tangible growth.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s23.png"
        },
        {
            "title": "Expert Guidance at Every Step",   
            "description": "Our team of certified strategists combines experience, creativity, and industry insight to ensure your content strategy is practical, actionable, and aligned with long-term goals.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s24.png"
        },
    ];
    
    return (
        <CommonGridBox3Scrollable
            boxHeight="350px"
            title={title}
            description={description}
            data={data} 
        />
    );
}