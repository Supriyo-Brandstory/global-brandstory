import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'


export const ModernPhotography =()=>{
    const data = {
    heading: "A Modern Photography Process for<br/>Excellent Results",
    subheading:
      "Our method is structured to deliver measurable impact at every stage, ensuring your photography projects reflect professionalism and brand excellence.<br/><b class='highlited-text'>Structured for Excellence, Designed for Impact</b>",
    cards: [
            {
              title: "Consultation & Planning",
              description:
                "We discuss your objectives, target audience, and creative vision in detail. Our project workflow ensures every decision we make aligns with your business goals before the shoot begins.",
            },
            {
              title: "Pre-Shoot Preparation",
              description:
                "Shot lists, styling, location scouting, and equipment checks are handled properly. Our photography planning services reduce risks and maximize productivity on the day of the shoot.",
            },
            {
              title: "The Photoshoot",
              description:
                "We execute each session with a keen eye on lighting, framing, and brand aesthetics. Our expert team ensures consistency, creativity, and technical accuracy throughout the shoot.",
            },
            {
              title: "Post Production & Delivery",
              description:
                "Professional color grading, retouching, and quality control refine each image. The photo editing workflow guarantees polished visuals ready for marketing. Final images are delivered securely via online galleries or cloud storage.",
            }
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>We deliver professional photography solutions that elevate brands, engage audiences, and drive tangible business outcomes.</p>
        </>
    )
}
