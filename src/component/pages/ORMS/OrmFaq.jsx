import FAQs from '@/component/pages/common/CommonFAQ'

export const OrmFaq = () => {
    const data = [
        {
            title: "How Long Does It Take To Fix Or Improve My Online Reputation?",
            description: "The timeline to fix or improve an online reputation can vary widely depending on the severity of the issue, the volume of negative content, and the specific goals. While some improvements can be seen in a few weeks, a comprehensive and lasting change typically takes several months of consistent effort."
        },
        {
            title: "Is It Possible To Completely Remove Negative Reviews Or Search Results?",
            description: "It is extremely difficult to completely remove negative reviews or search results from the internet, as most platforms have policies against forced removal. Instead, we focus on a proactive strategy of suppression and displacement, creating and promoting positive, high-quality content that pushes negative results down and out of sight."
        },
        {
            title: "Do You Only Provide Crisis Recovery, Or Do You Also Offer Proactive Reputation Management?",
            description: "We offer both. Our services include both proactive reputation management, which involves building and maintaining a strong online presence to prevent issues, and reactive crisis recovery, which focuses on swiftly addressing and mitigating damage from negative events."
        },
        {
            title: "How Do You Monitor My Brand's Online Reputation?",
            description: "We use a combination of advanced tools like Brandwatch, Meltwater, and Google Alerts to monitor your brand's online reputation in real-time. This includes tracking mentions, reviews, news articles, and social media conversations to provide a comprehensive view of how your brand is being perceived."
        },
        {
            title: "Is Online Reputation Management Only For Large Brands?",
            description: "No, online reputation management is crucial for businesses of all sizes, from startups to large corporations, as well as for individuals and executives. The strategies are tailored to the specific needs and scale of each client, ensuring that everyone can benefit from a positive online presence."
        },
        {
            title: "How Do You Measure The Success Of ORM Campaigns?",
            description: "We measure the success of ORM campaigns using key metrics such as improved search engine rankings for positive content, a higher percentage of positive reviews and sentiment, and increased brand trust. We provide regular reports that show the tangible results of our efforts."
        }
    ];

    return (
        <FAQs data={data}/>
    )
}