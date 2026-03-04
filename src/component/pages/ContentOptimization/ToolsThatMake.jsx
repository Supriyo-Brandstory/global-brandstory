import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";


export const ToolsThatMake = () => {
    
    const title = "Tools That Make Optimization Smarter";
    const description = "We Use Content Optimization Tools To Improve Quality And Efficiency:";
    const data = [
        {
            "title": "Understanding Performance",   
            "description": "Analytics help us see how your content is really working, from traffic to conversions. We track the numbers that matter and use them to guide improvements.",
            "bgcolor": "#a03e17ff", 
            "logo": "/images/square-images/s28.png" 
        },
        {
            "title": "Finding The Right Opportunities",   
            "description": "SEO tools show us which keywords and topics will connect best with your audience. This way, your content stays visible and relevant.",
            "bgcolor": "#514f82ff", 
            "logo": "/images/square-images/s29.png" 
        },
        {
            "title": "Keeping Everything On Track",   
            "description": "Workflow platforms allow us to manage tasks, feedback, and deadlines smoothly, so your content is always delivered on time and at the standard you expect.",
            "bgcolor": "#c1ba9cff", 
            "logo": "/images/square-images/s27.png" 
        },
        {
            "title": "Measuring What Matters",   
            "description": "Dashboards bring all the results together in one place, giving you a clear view of impact and ROI without the noise.",
            "bgcolor": "#a03e17ff", 
            "logo": "/images/square-images/s23.png" 
        }
    ];
    
    return (
        <>
            <CommonGridBox3Scrollable
                boxHeight="350px"
                title={title}
                description={description}
                data={data} 
            />
            <p className='max-w-[1200px] text-center mx-auto mb-30'>
                These tools allow us to deliver precision-driven improvements without overcomplicating the process.
            </p>
        </>
    );
}