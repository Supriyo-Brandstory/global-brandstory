import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const RealTime = ()=>{
    const title = "Real-Time Campaign Optimization"; 
    const description = "We constantly check your campaigns to improve results."; 
    const footer ="This ensures that your Pinterest ads get better over time and give more return on investment."
    const data = [
          {
            "title": "Track Performance", 
            "description": "We watch which pins get the most clicks, saves, and conversions. By analyzing these metrics, we learn what your audience likes, which designs grab attention, and which messages drive action. This insight helps guide every future campaign.",
            "bgcolor": "#6d3119", 
            "logo": "/images/square-images/s23.png"
          },
          {
            "title": "A/B Testing", 
            "description": "We test different images, text, and audience segments to see which combinations perform best. Testing allows us to refine messaging, visuals, and targeting so your ads continuously improve and achieve higher engagement.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s35.png"
          },
          {
            "title": "Clear Reporting", 
            "description": "You’ll receive easy-to-read dashboards with weekly or monthly updates. These reports clearly show how your campaigns are performing, highlight successes, and explain where adjustments are being made to optimize results.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s44.png"
          }
        ];
    return (
        <CommonGridBox3 footer={footer} title={title} description={description} data={data} />
    );
}