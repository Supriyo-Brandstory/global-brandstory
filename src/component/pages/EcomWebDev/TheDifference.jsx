import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const TheDifference = ()=>{
    const title = "The Difference Our Ecommerce Solutions Make for Your Business";
    const description = "Choosing the right partner for online store development is critical. Here’s why businesses trust us:";
    const data = [
          {
            "title": "Experience & Expertise",
            "description": "With years of hands-on experience, we’ve built e-commerce stores capable of handling thousands of transactions daily. This ensures that your platform is fast, reliable, and scalable, ready to grow with your business.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png" 
          },
          {
            "title": "Authority In E-Commerce",
            "description": "We’re recognized for delivering custom e-commerce solutions and innovative strategies that help brands stand out in competitive markets. Our expertise ensures your store is not just functional but a key growth driver.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s29.png" 
          },
          {
            "title": "Trusted Partnership",
            "description": "Collaboration is at the core of our approach. We work closely with your team to turn your vision into reality, providing guidance, clear communication, and a seamless project experience from start to finish.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s50.png" 
          },
          {
            "title": "Proven Results",
            "description": "Every solution we deliver is designed to produce measurable outcomes. From boosting conversions and increasing revenue to improving customer retention, we focus on tangible results that drive your business forward.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s51.png" 
          }
        ];
    return (
        <CommonGridBox3Scrollable boxHeight='350px' title={title} description={description} data={data} footer="We don’t just build websites; we build growth engines."/>
    );
}