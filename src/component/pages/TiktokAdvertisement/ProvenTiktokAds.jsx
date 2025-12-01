import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const ProvenTiktokAds = ()=>{
    const title = "Proven TikTok Ads Workflow";
    const description = "";
    const data = [
          {
            "title": "Onboarding & Goal Setting",
            "description": "Every campaign begins with a strategic, deep dive. Target KPIs are defined, customer journeys are mapped, and audience personas are clarified. This ensures the creative direction, messaging, and targeting are all aligned with business goals from day one.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png" 
          },
          {
            "title": "Creative Development",
            "description": "Concepts are ideated based on TikTok trends, audience insights, and competitive analysis. Scripts are written to capture attention within the first three seconds, followed by filming and editing optimized for TikTok's vertical, sound-on format.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s24.png" 
          },
          {
            "title": "Campaign Setup",
            "description": "Advanced audience targeting is configured using demographics, interests, behaviors, and lookalike data. Budgets are strategically allocated across ad groups, and the most effective TikTok ad formats (In-Feed, Spark Ads, TopView) are selected to match campaign objectives.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s44.png" 
          },
          {
            "title": "Launch & Early Monitoring",
            "description": "Campaigns enter an initial testing phase where CTR, CBA, engagement rate, and view-through rate are closely monitored. Quick adjustments are made to creative and targeting to prevent wasted spend and improve early performance.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s28.png" 
          },
          {
            "title": "Optimization & Scaling",
            "description": "Winning creatives and high-performing audiences are identified through A/B testing. Budgets are shifted toward these top performers, while underperforming segments are refined or paused. This keeps ROAS consistently high while scaling reach.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s5.png" 
          },
          {
            "title": "Reporting & Insights",
            "description": "Weekly reports break down performance data, revealing which creatives, audiences, and placements are driving the strongest results. Each report includes actionable recommendations for the next optimization cycle, ensuring continuous growth.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s10.png" 
          }
        ];
    return (
        <CommonGridBox3Scrollable boxHeight="380px" title={title} description={description} data={data} />
    );
}