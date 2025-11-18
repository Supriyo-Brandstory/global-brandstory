import CommonGridBox3 from "../common/CommonGridBox3";

export const WhyItMatters = ()=>{
    const title = "Why It Matters: Creating Impact Through Culture, Community, and Conversion";
    const description = "Why social media is important goes beyond likes and shares. It builds trust, strengthens visibility, and drives meaningful business results. Today, there are 4.9 billion social media users worldwide. Every day your brand isn’t visible is an opportunity lost.<br/><br/>Here’s how social media delivers results:";
    const footer="Social media shapes how your audience sees your brand. It’s your voice in a crowded, noisy digital world."
    const data = [
          {
            "title": "Conversions:",
            "description": "Turn attention into leads, sign-ups, and sales",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s14.png"
          },
          {
            "title": "Conversations:",
            "description": "Build authentic connections with your audience",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s15.png"
          },
          {
            "title": "Credibility:",
            "description": "Position your brand as reliable, knowledgeable, and human",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s16.png"
          }
        ];
    return (
        <CommonGridBox3 title={title} description={description} footer={footer} data={data} />
    );
}