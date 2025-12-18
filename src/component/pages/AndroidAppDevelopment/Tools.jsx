import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const Tools = () => {
    const title = "Tools and Technology We Use to Build High-Performing Android Apps";
    const description = "We leverage the latest technologies to deliver modern, future-ready apps:";
    const data = [
          {
            "title": "Languages",
            "description": "Kotlin as the primary language, with Java for legacy support, ensuring modern, maintainable, and backward-compatible apps.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s56.png"
          },
          {
            "title": "UI Toolkit",
            "description": "Jetpack Compose for building intuitive, responsive, and visually engaging interfaces.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s57.png"
          },
          {
            "title": "Architecture",
            "description": "MVVM, Clean Architecture, and multi-module design for scalable, maintainable, and future-proof app development.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s22.png"
          },
          {
            "title": "Frameworks & Libraries",
            "description": "Android Jetpack, Firebase, Retrofit, and Coroutines for robust functionality, seamless integrations, and smooth asynchronous operations.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s32.png"
          },
          {
            "title": "Analytics & Monitoring",
            "description": "Real-time tracking and performance monitoring to gain actionable insights and continuously optimize app experiences.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s12.png"
          }
        ];
    return (
        <CommonGridBox3Scrollable title={title} description={description} data={data} />
    );
}