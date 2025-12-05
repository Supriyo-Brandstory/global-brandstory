import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const OurInventory = () => {
    const title = "Our Inventory Buying Process";
    const description = "Our Inventory Buying Workflow Is Structured, Transparent, And Designed For Performance At Every Step. We Combine Data, Platform Logic, And Creative Alignment To Deliver Precision At Scale.";
    const data = [
        {
            "title": "Market & Audience Research",   
            "description": "We Analyze Your Target Audience Based On Behavior, Demographics, And Intent Signals. This Helps Us Identify Where They Spend Time And How To Reach Them Effectively.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s26.png"
        },
        {
            "title": "Platform Selection & Inventory Allocation",   
            "description": "We Select The Most Relevant Channels And Inventory Sources Based On Campaign Goals. Formats Are Chosen To Match User Behavior Across Video, Display, Mobile, Or OTT.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s31.png"
        },
        {
            "title": "Real Time Bidding Optimization",   
            "description": "Our Team Continuously Adjusts Bids Using Real-Time Data And Competitive Signals. We Optimize For Placement Quality, Cost Efficiency, And Conversion Likelihood.",
            "bgcolor": "#c1ba9cff",
            "logo": "/images/square-images/s22.png"
        },
        {
            "title": "Creative Planning + Ad Placement",   
            "description": "We Align Your Creative Assets With Platform-Specific Formats And User Journeys. Each Ad Is Placed In High-Performing Inventory Zones For Better Engagement And ROI.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s33.png"
        },
        {
            "title": "Cost Control & Reporting",   
            "description": "Daily Pacing, Impression Monitoring, And Smart Caps Help Avoid Overspend. Detailed Performance Reports Ensure Accountability And Data-Backed Decision Making.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s35.png"
        },
    ];
    
    return (
        <>
            <CommonGridBox3Scrollable 
                boxHeight="350px"
                title={title}
                description={description}
                data={data} 
                paddingBottom='20px'
            />
            <p className='max-w-[1200px] text-center mx-auto mb-30'>This Proven Media Buying Process Allows Us To Drive Real Outcomes While Staying Agile And Responsive.</p>
        </>
    );
}