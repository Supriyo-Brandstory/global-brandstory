import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const OnDemandInsights = ()=>{
    const data = [
        {
            logo: "/images/rounded-icons/r48.png",
            title: "Access tools and dashboards from anywhere, anytime",
            description: "Our cloud-first setup means you can log in and check your numbers whenever you need to, without setting up your own servers.",
            bg: "/images/three-card-blur-bg-1.png"
        },
        {
            logo: "/images/rounded-icons/r49.png",
            title: "Stay updated with reports and insights that actually matter",
            description: "You’ll get clean summaries, key trends, and smart suggestions on what to do next.",
            bg: "/images/three-card-blur-bg-2.png"
        },
        {
            logo: "/images/rounded-icons/r50.png",
            title: "Scale up or down as your business changes",
            description: "Need deeper insights during a product launch? Want to pause between campaigns? With DAaaS, you can adjust anytime, no long contracts or team restructuring.",
            bg: "/images/three-card-blur-bg-3.png"
        }
    ]

    return (
        <CommonThreeCardBlur
            heading="On-Demand Insights with Data Analytics<br/>as a Service (DAaaS)"
            subheading="Don’t want to hire a full in-house team? Our data analytics as a service lets you use our experts like your own."
            data={data}
            footer={"Stay smart without the overhead."}
        />
    )
}