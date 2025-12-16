import CommonTwoCard from '../common/CommonTwoCard'

export const HowOur =()=>{
    const data = {
    heading: "How Our Website Revamp Services Help<br/>Businesses Achieve Online Success",
    subheading:
      "We don’t just update your site, we reimagine it. Our services include:",
    cards: [
            {
              title: "Legacy Website Modernization",
              description:
                "We update and optimize older platforms to enhance speed, performance, and overall design. The goal is to transform outdated sites into modern, efficient, and scalable digital experiences.",
            },
            {
              title: "UX/UI Overhaul",
              description:
                "Our team designs intuitive layouts, wireframes, and interactive prototypes to create a frictionless user experience. Every element is focused on guiding visitors seamlessly through your site.",
            },
            {
              title: "Conversion Rate Optimization (CRO)",
              description:
                "Through data-driven improvements, we refine user journeys, calls-to-action, and content placement to boost lead generation, sales, and overall engagement.",
            },
            {
              title: "Brand Revitalization",
              description:
                "We align your website’s visuals and content with your brand story, ensuring a cohesive identity that resonates with your audience and strengthens credibility.",
            },
            {
              title: "Technical SEO & Performance Optimization",
              description:
                "Our clean code, fast-loading pages, and SEO-friendly architecture ensure your site ranks well, performs reliably, and provides a smooth experience for users and search engines alike.",
            },
            {
              title: "Mobile-First Design",
              description:
                "Every redesign is optimized for all devices, ensuring responsive, seamless functionality on smartphones, tablets, and desktops.",
            },
            {
              title: "CMS Migration",
              description:
                "We handle seamless content migration to modern CMS platforms without losing SEO value or site integrity.",
            },
            {
              title: "Post-Launch Support",
              description:
                "Our engagement doesn’t end at launch. We provide ongoing A/B testing, KPI tracking, and performance optimization to ensure your website continues to deliver results over time.",
            },
        ],
    };
    
    return (
        <CommonTwoCard {...data}/>
    )
}