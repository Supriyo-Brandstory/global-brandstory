import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const WhyBrandsChoose = ()=>{
    const title = "Why Brands Choose BrandStory as Their<br/>Marketplace Partner";
    const description = "With 500+ Successful Campaigns Across Platforms, BrandStory Is Trusted By Ecommerce Brands That Want More Than Just Clicks, They Want Results. As The Best Marketplace Advertising Agency, We Bring Clarity, Speed, And Full Ownership To Every Campaign We Touch.";
    const data = [
          {
            "title": "Trusted By Leading Brands",
            "description": "Fast Growing Startups And Established Global Brands Across Categories Like Fashion, Electronics, Beauty And More, Trust Us To Scale Their Business Efficiently.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s33.png"
          },
          {
            "title": "Driving Sales Uplift",
            "description": "We Don’t Just Plug Into Your Brand, We Power It Forward. Brands See 30%+ Average Sales Uplift Through Optimized Listings, Smarter Bidding, And Tighter Campaign Structures.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s24.png"
          },
          {
            "title": "Cross Platform Expertise",
            "description": "From Amazon And Flipkart To Etsy, EBay, And Emerging Marketplaces, Our Deep Cross Platform Experience Ensures Every Channel Performs At Its Peak.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s22.png"
          },
          {
            "title": "Integrated Expert Team",
            "description": "Our In-House Team Of Media Buyers, Ecommerce Strategists, Performance Analysts, And Ad Creatives Works Smoothly To Deliver Results And Maintain Campaign Excellence.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s34.png"
          },
          {
            "title": "Fast Execution & Accountability",
            "description": "We Handle The Systems That Make Growth Possible. We Offer Fast Execution And Complete Accountability While You Focus On Scaling Your Business Confidently.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s21.png"
          }
        ];
        const footer ="We lead with insight. We execute with precision. We stay until it works. Because with BrandStory,<br/>you are not buying a service, you are building momentum."
    return (
        <CommonGridBox3Scrollable footer={footer} title={title} description={description} data={data} />
    );
}