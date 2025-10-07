import FAQs from '@/component/pages/common/CommonFAQ'

export const MobFaq = () => {
    const data = [
        {
            title: "What Does A Mobile App Development Company Do?",
            description: "A mobile app development company handles the entire lifecycle of creating a mobile application, including strategy, UI/UX design, development (coding for iOS, Android, or cross-platform), testing, deployment to app stores, and post-launch maintenance and updates."
        },
        {
            title: "How Long Does It Take To Build A Mobile App?",
            description: "The timeline varies significantly based on complexity. A simple app (MVP) may take 2-4 months, a medium-complexity app takes 4-7 months, and a highly complex, feature-rich enterprise application can take 8+ months. Discovery and planning (1-3 weeks) always precede development."
        },
        {
            title: "How Much Does Custom Mobile App Development Cost?",
            description: "Custom mobile app development costs depend entirely on features, platform (Native vs. Cross-Platform), design complexity, and hourly rates. Costs can range from $25,000 for a simple app to over $150,000 for a complex, custom enterprise solution."
        },
        {
            title: "What's The Difference Between Native And Cross-Platform Apps?",
            description: "Native apps are built using platform-specific languages (Swift/Kotlin) for a single operating system, offering maximum performance. Cross-platform apps are built using frameworks like React Native or Flutter, allowing a single codebase to run on both iOS and Android, which reduces development time and cost at the possible expense of minor performance limitations."
        },
        {
            title: "Why Choose BrandStory?",
            description: "BrandStory combines strategic design thinking, engineering excellence, and digital marketing expertise. We offer scalable engagement models, industry-compliant security, and guaranteed post-launch support, ensuring your app is built for long-term success and growth."
        },
    ];

    // Removing the 6th item as the screenshot only shows 5 FAQs
    // The original component had 6 items, so I am reducing it to 5 to match the visible list.

    return (
        <FAQs data={data}/>
    )
}