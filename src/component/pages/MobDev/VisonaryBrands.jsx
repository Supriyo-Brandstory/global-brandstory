import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const VisonaryBrands = () => {
     const accordionData = [
    {
      title: "1. Mobile Projects We’ve Delivered",
      content:
        "From High-Utility B2C Apps To Enterprise-Grade Mobility Solutions, Our Portfolio Spans 150+ Successful Mobile App Launches Across Industries. Every Application Is Designed To Solve Real-World Business Challenges – With Seamless UX, Optimized Performance, And Measurable Outcomes.",
    },
    {
      title: "2. Our Mobile App Developers",
      content:
        "Our team of expert mobile app developers possesses deep expertise in native (iOS/Android) and cross-platform development, ensuring your solution is built by specialists with a focus on performance and scalability.",
    },
    {
      title: "3. Project Management & Client Success",
      content:
        "We follow an agile, transparent development process with dedicated project managers to ensure on-time delivery, clear communication, and a partnership-focused approach that guarantees client satisfaction.",
    },
    {
      title: "4. Mobile App Development Services Across All Platforms",
      content:
        "We provide end-to-end services, including native iOS and Android development, cross-platform solutions (like React Native and Flutter), and custom mobile backend engineering, covering every stage of the app lifecycle.",
    },
  ];
  return (
        <CommonAccordion
        title="A Mobile Partner Trusted by Visionary Brands"
            // subheding1 is commented out in the original and will remain so.
            subheding2="Not Every Business Needs The Same Website – And That’s Where Strategy Matters. Discover A Digital Solution That Fits Your Business Model, Audience Behavior, And Growth Goals. <br/><b class='highlited-text'>Choose From Our Full-Spectrum Web Development Solutions:</b>"
            items={accordionData} 
            // Footer removed as it does not appear in the screenshot's visible area.
        />
    )
}