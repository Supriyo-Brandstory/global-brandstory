import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const OurServices =()=>{
    const data = {
    heading: "Our Services to Build Conversion-Focused<br/>Landing Pages",
    subheading:
      "We provide end-to-end landing page development services designed to meet your specific business needs:",
    cards: [
            {
              title: "Custom Landing Page Design",
              description:
                "We design landing pages that reflect your brand’s voice, resonate with your target audience, and align with campaign objectives. Each page is strategically structured to capture attention and guide visitors toward action.",
            },
            {
              title: "Conversion Rate Optimization (CRO)",
              description:
                "Your landing page isn't static—it evolves. Through data-driven analysis, heatmaps, and testing, we continuously refine design and content to maximize conversions and deliver measurable ROI.",
            },
            {
              title: "A/B Testing Services",
              description:
                "We create and test multiple page variations to identify the highest-performing version. From headlines to CTAs, every element is optimized to ensure better engagement and higher conversions.",
            },
            {
              title: "UX & UI Design",
              description:
                "Using human-centered design principles, we craft intuitive layouts and friction-free experiences. Visitors navigate with ease, resulting in more time spent on-page and stronger conversion rates.",
            },
            {
              title: "Mobile-First Responsive Design",
              description:
                "With most traffic coming from mobile, we prioritize mobile-first design. Every landing page works flawlessly across devices—desktop, tablet, or smartphone—ensuring no opportunity is lost.",
            },
            {
              title: "Lead Generation Strategy",
              description:
                "Our pages are built to fuel your pipeline with qualified leads. Strategic form placement, persuasive CTAs, and trust-building elements convert visitors into prospects that your sales team can act on.",
            },
            {
              title: "Analytics & Tracking Setup",
              description:
                "We integrate robust analytics into every landing page. From conversion tracking and heatmaps to behavior flow analysis, you’ll have clear insights into what works and what needs improvement.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>From WordPress landing pages and Unbounce builds to fully custom-coded solutions, we adapt to your platform and goals.</p>
        </>
    )
}