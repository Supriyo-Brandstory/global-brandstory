import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const Technology = ()=>{
    const title = "Technology That Ensures Reliable Hybrid Mobile App Development";
    const description = "We leverage the best tools to deliver top-quality hybrid apps:";
    const data = [
          {
            "title": "Frameworks",
            "description": "We leverage Flutter and React Native to build high-performance, cross-platform apps. These frameworks allow us to deliver near-native experiences on both iOS and Android with a single, maintainable codebase.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s43.png"
          },
          {
            "title": "Languages",
            "description": "Our team is proficient in Dart for Flutter and JavaScript/TypeScript for React Native. This expertise ensures clean, modular, and scalable code, enabling smooth functionality and easier maintenance.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s58.png"
          },
          {
            "title": "Architecture",
            "description": "We implement MVVM and modular architecture patterns to create apps that are robust, maintainable, and future-ready. This approach allows for easier feature updates and long-term scalability.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s22.png"
          },
          {
            "title": "Integrations",
            "description": "Seamless connections with cloud platforms such as Firebase, Google Cloud, and AWS enable real-time data, notifications, analytics, and scalable backend services for your app.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s20.png"
          },
          {
            "title": "Design Tools",
            "description": "Our designers use Figma and Adobe XD to create intuitive, visually engaging interfaces. Consistent components and reusable design systems ensure a smooth, user-friendly experience across platforms.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s59.png"
          },
          {
            "title": "Analytics & ASO",
            "description": "We leverage tools like Google Analytics and App Store Connect to monitor app performance, track user behavior, and optimize discoverability. This ensures your app continually improves and reaches its intended audience effectively.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s9.png"
          }
        ];
    return (
        <CommonGridBox3Scrollable boxHeight='350px' title={title} description={description} data={data} />
    );
}