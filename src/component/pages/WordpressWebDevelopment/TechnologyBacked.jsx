import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const TechnologyBacked = ()=>{
    const title = "Technology-Backed Strategies That Streamline WordPress Development";
    const description = "We focus on delivering measurable results. Our strategies include:";
    const data = [
          {
            "title": "User-Centric Design",
            "description": "We create interfaces that guide visitors naturally toward key actions, making it easy for them to explore, engage, and convert. Every design choice is informed by user behavior and tested for optimal experience.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s34.png" 
          },
          {
            "title": "Performance Optimization",
            "description": "Your website's speed and responsiveness are critical. We implement clean, efficient code, caching strategies, and other optimizations to ensure fast load times, smooth interactions, and minimal downtime.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s5.png"
          },
          {
            "title": "SEO & Content Integration",
            "description": "A great website is only effective if it can be found. We structure your content and architecture to improve search visibility, integrating SEO best practices with compelling messaging to attract and retain your target audience.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s10.png"
          },
          {
            "title": "Security-First Approach",
            "description": "Protecting your website and its data is non-negotiable. We employ enterprise-level security measures to guard against cyber threats, keeping your business and users safe.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s43.png"
          },
          {
            "title": "Scalable Architecture",
            "description": "Websites should grow with your business. We design scalable platforms that accommodate future expansion, new features, and traffic spikes—avoiding costly overhauls and ensuring long-term value.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s24.png"
          },
        ];
    return (
        <CommonGridBox3Scrollable boxHeight='360px' title={title} description={description} data={data} />
    );
}