import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const HowOurTeam =()=>{
    const data = {
    heading: "How Our Team Excels in Cross-Platform<br/>App Development",
    subheading:
      "Experience, expertise, authority, and trustworthiness are the cornerstones of our approach.",
    cards: [
            {
              title: "Proven Track Record",
              description:
                "We have successfully delivered cross-platform apps for startups, mid-sized companies, and enterprise clients across industries. Our solutions consistently scale to meet growing user bases, delivering measurable results in engagement, retention, and business growth.",
            },
            {
              title: "Technical Mastery",
              description:
                "Our developers are highly skilled in Flutter and React Native, building modular, maintainable architectures. Combined with expertise in cloud integrations, API connectivity, and advanced performance optimization, we ensure your app is robust, future-ready, and capable of handling evolving business needs.",
            },
            {
              title: "Collaborative Partnership",
              description:
                "We treat you as a true partner throughout the development process. From ideation to launch, we maintain transparent communication, involve you in decision-making, and align every feature, design choice, and technical solution with your business objectives.",
            },
            {
              title: "Results-Driven Approach",
              description:
                "Our focus is on delivering tangible business outcomes. By prioritizing ROI, faster time-to-market, and enhanced market reach, we ensure that each app we build not only meets user expectations but also drives growth, efficiency, and competitive advantage.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
        </>
    )
}