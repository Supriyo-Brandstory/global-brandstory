import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const AdvancedSoftwareSolutions =()=>{
    const data = {
    heading: "Advanced Software Solutions for<br/>Complex Challenges",
    subheading:
      "We Help Businesses Define, Plan, And Visualize Software Before A Single Line Of Code Is Written. Our Services Are Designed To Reduce Uncertainty, Optimize Resources, And Give Your Development Team A Clear Roadmap.<br/><br/><b class='highlited-text'>Key Offerings Include:</b>",
    cards: [
            {
              title: "Software Architecture Blueprint",
              description:
                "We create a comprehensive blueprint detailing your technology stack, database design, API strategy, and system components. Think of it as the DNA of your product, providing a clear foundation for development and scalability.",
            },
            {
              title: "UX/UI Wireframe Suite",
              description:
                "From low-fidelity sketches to high-fidelity layouts, we map every screen and interaction. This ensures users enjoy an intuitive, seamless experience from day one, minimizing friction and maximizing engagement.",
            },
            {
              title: "Interactive Prototypes",
              description:
                "Clickable, interactive mockups simulate the user journey, allowing stakeholders to provide feedback and validate design decisions before development begins. This approach reduces risk and accelerates alignment across teams.",
            },
            {
              title: "Technical Documentation & Handoff",
              description:
                "We provide detailed architecture diagrams, technical specifications, and a wireframe playbook to guide your development team. This ensures smooth execution, minimizes misunderstandings, and sets the stage for a successful build.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Each deliverable is a strategic tool that streamlines development, minimizes risk, and maximizes ROI.</p>
        </>
    )
}