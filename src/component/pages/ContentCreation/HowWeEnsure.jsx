import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const HowWeEnsure = ()=>{
    const title = "How We Ensure Quality &<br/>Performance";
    const description = "Creating content is about making sure every piece is clear, reliable, and delivers results. Here’s how we make that happen:";
    const data = [
          {
            "title": "Accuracy Comes First",
            "description": "We fact-check and verify everything so your audience always gets trustworthy information.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png"
          },
          {
            "title": "A Consistent Brand Voice",
            "description": "Whether it's a blog, social post, or video script, we make sure the tone and style reflect your brand seamlessly.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s13.png"
          },
          {
            "title": "Careful Editing",
            "description": "Every piece goes through multiple reviews to ensure it's polished, easy to read, and error-free.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s22.png"
          },
          {
            "title": "Optimized For Visibility",
            "description": "We weave in SEO best practices, keywords, meta details, and structure without ever compromising on natural flow.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s20.png"
          },
          {
            "title": "Made For People, Not Just Algorithms",
            "description": "Content is designed to be simple, engaging, and easy to digest, so your audience actually enjoys consuming it.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s25.png"
          },
          {
            "title": "Continuous Improvement",
            "description": "Once published, we track performance and use the insights to make your future content even better.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s27.png"
          }
        ];
    return (
        <CommonGridBox3Scrollable title={title} description={description} data={data} />
    );
}