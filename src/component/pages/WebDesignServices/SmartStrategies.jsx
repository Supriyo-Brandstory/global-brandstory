import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const SmartStrategies = ()=>{
    const title = "Smart Strategies That Align Design <br/>With Your Goals";
    const description = "Our Web Design Strategies Are Built To Maximize Impact:";
    const data = [
          {
            "title": "Conversion-Driven Design",
            "description": "We Design Every Page With Purpose—Guiding Users Toward Clear Actions, Whether It's Filling Out A Form, Making A Purchase, Or Engaging With Your Brand.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s43.png" 
          },
          {
            "title": "Mobile-First Approach",
            "description": "With Most Users Browsing On Smartphones, Our Designs Are Built Mobile-First, Then Optimized For Tablets And Desktops. Your Website Looks And Works Flawlessly Across All Devices.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s21.png" 
          },
          {
            "title": "Performance Optimization",
            "description": "Speed Matters. From Optimized Code To Lightweight Visuals, We Ensure Fast Load Times That Reduce Bounce Rates And Keep Visitors Engaged.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s36.png" 
          },
          {
            "title": "SEO Integration",
            "description": "We Build SEO Into The Foundation Of Your Website—Technical Structure, On-Page Elements, And Clean Coding—So Your Site Performs In Search Engines From Day One.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s23.png" 
          },
          {
            "title": "Continuous Testing",
            "description": "Our Work Doesn't Stop At Launch. We Run Regular Usability Checks And Performance Reviews To Refine And Improve Your Website For Long-Term Success.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s8.png" 
          }
        ];
        const footer = "We focus on strategies that generate measurable ROI and improve your online presence."
    return (
        <CommonGridBox3Scrollable footer={footer} title={title} description={description} data={data} />
    );
}