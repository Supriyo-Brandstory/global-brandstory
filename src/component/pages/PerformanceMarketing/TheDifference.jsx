import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const TheDifference = ()=>{
    const title = "The Difference Our Ecommerce Solutions Make for Your Business";
    const description = "Choosing the right partner for online store development is critical. Here's why businesses trust us:";
    const data = [
          {
            "title": "Discovery & Audit",
            "description": "We begin by understanding your business inside and out. Our team analyzes your product, ideal customer profile (ICP), and past campaign data to identify gaps in your current marketing funnel. Through in-depth research on high intent keywords, audience behavior, and competitor activity, we build a performance marketing strategy that aligns perfectly with your goals and drives measurable results.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png"
          },
          {
            "title": "Strategic Planning",
            "description": "With insights in place, we design a campaign strategy built for performance. We define KPIs for every stage of the growth funnel like awareness, engagement, and conversion while selecting the right mix of platforms based on your audience and budget. Every creative, message, and ad format is aligned with the customer journey, ensuring every decision and spend allocation supports your business objectives.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s21.png"
          },
          {
            "title": "Campaign Launch",
            "description": "Once the plan is set, we move into execution. Our team sets up all ad accounts, tracking pixels, and UTM parameters to ensure clean, accurate data from day one. We organize creative assets, headlines, and copy before initiating a soft campaign launch with limited budgets to validate early assumptions. This phase focuses on precision, control, and building a strong foundation for scalable growth.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s10.png"
          },
          {
            "title": "Test & Optimize",
            "description": "We enter the optimization loop, the core of performance marketing. Through weekly reviews, we analyze campaign data and uncover actionable insights to drive continuous improvement. Our team tests new creatives, refines targeting, adjusts bids, and experiments with fresh offers. This ongoing testing and iteration cycle keeps your campaigns sharp, scalable, and consistently competitive.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s43.png"
          },
          {
            "title": "Scale",
            "description": "Once the campaigns are stable and profitable, we shift focus to growth. We expand into new geographies, audience segments, and ad platforms to widen reach and impact. With advanced attribution models and custom reporting dashboards, this stage transforms momentum into meaningful, sustained business growth.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s24.png"
          }
        ];
    return (
        <CommonGridBox3Scrollable boxHeight={470} title={title} description={description} data={data} />
    );
}