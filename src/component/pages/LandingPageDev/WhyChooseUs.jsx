import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const WhyChooseUs = ()=>{
    const title = "Why Choose Us for Landing Page Development";
    const description = ""; 
    const data = [
          {
            "title": "Proven Expertise",
            "description": "With years of experience designing high-converting landing pages across industries, we understand what drives clicks, conversions, and ROI.",
            "bgcolor": "#6d3119", 
            "logo": "/images/square-images/s52.png" 
          },
          {
            "title": "Collaborative Process",
            "description": "We don't just build pages—we partner with your team. Every design, headline, and CTA is aligned with your campaign objectives and brand voice.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s35.png"
          },
          {
            "title": "Data-Driven Decisions",
            "description": "Our strategies are backed by analytics, A/B testing, and behavioral insights. No guesswork—only proven tactics that maximize performance.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s27.png"
          },
          {
            "title": "Full-Service Approach",
            "description": "From strategy and design to development, testing, and optimization, everything is handled under one roof for seamless execution and faster results.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s14.png"
          },
          {
            "title": "Trusted By Businesses",
            "description": "Startups, SaaS companies, and enterprise brands alike trust us to deliver measurable outcomes. Our portfolio speaks for itself.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s13.png"
          },
        ];
    return (
        <CommonGridBox3Scrollable title={title} description={description} data={data} />
    );
}