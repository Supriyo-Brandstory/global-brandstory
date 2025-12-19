import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const ThePeopleBehind = () => {
    const title = "The People Behind Exceptional Cross-Platform App Development Services"; 
    const description = "Our team combines designers, developers, strategists, and analysts:"; 
    const footer = "We bring technical expertise and creative insight together, ensuring every app is reliable, scalable, and engaging."; 
    const data = [
        {
            "title": "Development Expertise", 
            "description": `
                Our developers are highly skilled in Flutter, React Native, Dart, and JavaScript/TypeScript, enabling the creation of high-performance apps with a single codebase that runs seamlessly on both iOS and Android.
            ` 
        },
        {
            "title": "Cloud & Backend Integration", 
            "description": `
               We have extensive experience with cloud platforms such as Firebase, AWS, and Google Cloud. This allows us to implement scalable back-end services, real-time data syncing, and reliable infrastructure for apps of any size.
            ` 
        },
        {
            "title": "Architecture & Performance", 
            "description": `
               Our team specializes in modular architecture, API integrations, and cross-platform performance tuning. This ensures apps are maintainable, secure, and optimized for speed, responsiveness, and scalability, providing a seamless experience for users.
            ` 
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}