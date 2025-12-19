import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const KeyAdvantages =()=>{
    const data = {
    heading: "Key Advantages of Partnering With Brandstory Global for iOS App Development", 
    subheading:
      "", 
    cards: [
            {
              title: "Experience That Counts", 
              description:
                "We’ve successfully launched apps for startups and enterprise clients across industries. Our work consistently delivers measurable results, improved user engagement, and high satisfaction rates.", 
            },
            {
              title: "Expertise In Swift & Native Solutions", 
              description:
                "Our developers specialize in Swift, UIKit, SwiftUI, and MVVM architecture, ensuring your app is robust, maintainable, and future-ready. Native development guarantees speed, responsiveness, and seamless integration with Apple devices.", 
            },
            {
              title: "Authority In The Apple Ecosystem", 
              description:
                "From iCloud integration to Apple Pay and HealthKit, we understand Apple's ecosystem inside out. This allows us to create apps that feel truly native, intuitive, and optimized for iPhone, iPad, and other Apple platforms.", 
            },
            {
              title: "Trust & Transparency", 
              description:
                "We operate as your strategic partner, providing clear timelines, open communication, and ongoing support post-launch. Every decision is made collaboratively to align with your business goals and user expectations.", 
            },
        ],
    };


    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
    )
}