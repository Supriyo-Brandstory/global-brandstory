import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const ProvenStrategies = () => {
    const title = "Proven Strategies That Deliver High-Performing iOS Applications";
    const description = "Our performance-focused approach ensures every element of your app maximizes ROI:";
    const data = [
          {
            "title": "User-Centric Design",
            "description": "We design apps that feel natural, intuitive, and engaging, ensuring users can navigate seamlessly while enjoying a visually compelling experience.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png"
          },
          {
            "title": "Revenue Optimization",
            "description": "Our solutions help you unlock monetization opportunities through in-app purchases, subscriptions, or premium features, creating sustainable revenue streams.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s5.png"
          },
          {
            "title": "Retention Focus",
            "description": "By delivering smooth, fast, and reliable experiences, we encourage repeat usage and foster long-term user loyalty.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s9.png"
          },
          {
            "title": "Data-Driven Decisions",
            "description": "We leverage analytics and user insights to continuously refine your app's features, interface, and performance, ensuring ongoing improvements and better outcomes.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s20.png"
          },
          {
            "title": "Market Intelligence",
            "description": "Our strategies incorporate market trends, competitor analysis, and user expectations, aligning your app with current and future market demands for maximum impact.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s25.png"
          }
        ];
    return (
        <CommonGridBox3Scrollable title={title} description={description} data={data} />
    );
}