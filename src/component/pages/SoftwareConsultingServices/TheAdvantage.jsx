import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const TheAdvantage = ()=>{
    const title = "The Advantage of Partnering with BrandStory";
    const description = "Plenty of companies can advise on technology. What makes BrandStory different?";
    const footer = "When you choose BrandStory, you’re not hiring a vendor, you’re gaining a trusted advisor."
    const data = [
          {
            "title": "Strategic Business Acumen",
            "description": "We recognize that every technology decision is a business decision, ensuring solutions align with your strategic goals.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png" 
          },
          {
            "title": "Deep Technical Expertise",
            "description": "From AI and Cloud to automation and custom software, we leverage the tools that power modern, high-performing businesses.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s12.png" 
          },
          {
            "title": "Proven Methodology",
            "description": "Our framework provides a structured approach that ensures consistent, repeatable, and measurable outcomes.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s10.png" 
          },
          {
            "title": "Partnership Mindset",
            "description": "We collaborate closely with your team, acting as advisors and problem-solvers every step of the way.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s34.png" 
          },
          {
            "title": "Commitment To ROI",
            "description": "Every recommendation is tied to clear, measurable business results, ensuring value for your investment.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s35.png" 
          }
        ];
    return (
        <CommonGridBox3Scrollable title={title} description={description} data={data} footer={footer}/>
    );
}