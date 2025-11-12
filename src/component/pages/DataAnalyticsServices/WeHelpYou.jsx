import CommonGridBox3 from "../common/CommonGridBox3";

export const WeHelpYou = ()=>{
    const title = "We Help You Turn Numbers<br/>into Business Growth";
    const description = "Data doesn’t make money unless you know what to do with it. We show you how to get real ROI from your data analytics services.";
    const data = [
          {
            "title": "Build dashboards that align with real business outcomes",
            "description": "We don’t believe in pretty charts that sit untouched. We build dashboards that point to actions, revenue, retention, growth so your team always knows what to do next.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s23.png"
          },
          {
            "title": "Find out which products or channels bring in results",
            "description": "Stop wasting time and budget on things that don’t perform. With clear data views, you’ll know which efforts are worth doubling down on and which ones need a rethink.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s29.png"
          },
          {
            "title": "Cut costs and uncover new revenue opportunities",
            "description": "We help you spot inefficiencies, eliminate waste, and find new areas where your business can grow faster, cleaner, and smarter.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s9.png"
          }
        ];
    return (
        <CommonGridBox3 title={title} description={description} data={data} />
    );
}