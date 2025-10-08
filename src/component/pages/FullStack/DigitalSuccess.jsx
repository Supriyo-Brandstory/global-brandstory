import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const DigitalSuccess = () => {
     const accordionData = [
    {
      title: "1. Faster Go-to-Market, Lower Costs",
      content:
        "When there's no back-and-forth between multiple vendors or handoffs across siloed teams, timelines shrink and budgets stretch further. Fewer dependencies mean fewer delays — and that translates directly into cost-efficiency and speed.",
    },
    {
      title: "2. A Cohesive, Future-Proof Codebase",
      content:
        "Our team of expert mobile app developers possesses deep expertise in native (iOS/Android) and cross-platform development, ensuring your solution is built by specialists with a focus on performance and scalability.",
    },
    {
      title: "3. Greater Visibility, Total Accountability",
      content:
        "We follow an agile, transparent development process with dedicated project managers to ensure on-time delivery, clear communication, and a partnership-focused approach that guarantees client satisfaction.",
    },
    {
      title: "4. Modular Architecture for Long-Term Growth",
      content:
        "We provide end-to-end services, including native iOS and Android development, cross-platform solutions (like React Native and Flutter), and custom mobile backend engineering, covering every stage of the app lifecycle.",
    },
    {
      title: "5. Data-First Engineering",
      content:
        "We provide end-to-end services, including native iOS and Android development, cross-platform solutions (like React Native and Flutter), and custom mobile backend engineering, covering every stage of the app lifecycle.",
    },
  ];
  return (
        <CommonAccordion
        title="Accelerate Digital Success with Expert Full-Stack Development"
            // subheding1 is commented out in the original and will remain so.
            subheding2="When one team owns the entire stack, everything runs smoother — and smarter.<br/><b class='highlited-text'>Choose From Our Full-Spectrum Web Development Solutions:</b>"
            items={accordionData} 
            // Footer removed as it does not appear in the screenshot's visible area.
        />
    )
}
