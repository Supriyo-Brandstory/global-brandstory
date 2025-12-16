import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const Advantages = ()=>{
    const title = "Advantages of Partnering with BrandStory's Experts in Website Revamp Services";
    const description = "We combine experience, expertise, and trust to deliver measurable results:";
    const data = [
          {
            "title": "Data-Backed Strategy",
            "description": "Every decision we make, whether it’s designing a layout, crafting copy, or optimizing user flows is grounded in real data. By analyzing user behavior, engagement patterns, and conversion metrics, we ensure that your website isn't just visually appealing but also drives measurable results.",
            "bgcolor": "#6d3119", // Retaining original colors
            "logo": "/images/square-images/s41.png" // Retaining original logo paths
          },
          {
            "title": "Mobile-First Responsive Design",
            "description": "With more users browsing on smartphones than ever before, a poor mobile experience can cost you potential customers. Our designs prioritize mobile usability from the very start, ensuring your site looks stunning and functions seamlessly on every screen.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s53.png"
          },
          {
            "title": "Technical SEO Excellence",
            "description": "A beautiful website is meaningless if it can’t be found. That’s why we optimize every line of code, every page structure, and every asset for search engines. From clean, semantic HTML to lightning-fast loading speeds, our technical SEO approach boosts your rankings and makes it easier for your audience to discover you online.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s10.png"
          },
          {
            "title": "Brand-Aligned Storytelling",
            "description": "Through compelling visuals, thoughtful copy, and consistent brand messaging, we ensure that every page communicates your value, builds trust, and resonates deeply with your audience. We transform your brand identity into an experience that sticks.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s54.png"
          },
          {
            "title": "Seamless CMS Migration",
            "description": "Moving your website to a new content management system can feel daunting, especially if you're worried about losing SEO equity or critical data. We handle the entire migration process with precision, ensuring that your content, rankings, and functionality remain intact. Your website gets a fresh start without any disruption to your online presence.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s8.png"
          },
          // The original component had 6 items, but the image only shows 5. Removing the 6th item.
        ];
    return (
        <CommonGridBox3Scrollable boxHeight='420px' title={title} description={description} data={data} />
    );
}