import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const Tools = () => {
    const title = "Tools and Platforms That Help Us Create iOS Apps";
    const description = "We leverage the best in iOS development:";
    const footer = "This ensures your app is built with modern practices, is maintainable, and future-ready.";
    const data = [
        {
            "title": "Development Languages and Architecture",
            "description": `
                We build iOS apps using Swift for clean, modern code and support Objective-C for legacy systems. Our projects follow MVC, MVVM, and Clean Architecture, ensuring scalability and easy maintenance.
            `
        },
        {
            "title": "Frameworks, Libraries, and Integrations",
            "description": `
               From UIKit and SwiftUI to Core Data, Core ML, ARKit, and Firebase, we use powerful tools that bring apps to life. These platforms help us create smooth experiences with advanced features.
            `
        },
        {
            "title": "Design and Prototyping Tools",
            "description": `
               We rely on Figma and Sketch to design intuitive interfaces. Each app starts with detailed wireframes and prototypes, ensuring user journeys are refined before development begins.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description} footer={footer} cardData={data} />
    );
}