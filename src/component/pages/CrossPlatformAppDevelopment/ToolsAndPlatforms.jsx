import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const ToolsAndPlatforms = ()=>{
    const title = "Tools and Platforms That Make<br/>Cross-Platform App Development Seamless";
    const description = "We leverage modern frameworks, tools, and integrations to maximize efficiency and performance:";
    const footer = "This ensures your app is future-ready, flexible, and built to grow."
    const data = [
          {
            "title": "Frameworks",
            "description": "We leverage Flutter and React Native to build high-performance, cross-platform apps that deliver near-native experiences on both iOS and Android with a single codebase.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s43.png"
          },
          {
            "title": "Languages",
            "description": "Our team is proficient in Dart for Flutter and JavaScript/TypeScript for React Native, ensuring clean, maintainable, and scalable code.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s58.png"
          },
          {
            "title": "Architecture",
            "description": "We implement MVVM and modular architecture patterns to create apps that are robust, easy to maintain, and adaptable to future feature expansions.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s22.png"
          },
          {
            "title": "Integrations",
            "description": "We seamlessly connect apps with cloud platforms and backend services like Firebase, Google Cloud, and AWS, enabling real-time data, push notifications, analytics, and scalable infrastructure.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s20.png"
          },
          {
            "title": "Design Tools",
            "description": "Our UI/UX designers use Figma, Adobe XD, and Sketch to create intuitive, visually engaging interfaces that enhance usability and provide a consistent experience across platforms.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s59.png"
          }
        ];
    return (
        <CommonGridBox3Scrollable title={title} description={description} footer={footer} data={data} />
    );
}