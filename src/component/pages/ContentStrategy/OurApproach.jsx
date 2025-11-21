import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const OurApproach = () =>{
    return(
       <CommonAbout 
            title='<h2>Our Approach to Content Strategy: Purpose-Driven, Measurable, Effective</h2>'
            subtitle='<p>We treat content strategy as a framework that aligns every piece of communication with business goals, audience needs, and measurable results.</p>'
            text1="<b>Our Content Strategy Approach Includes:</b>"
            points={['<b>Strategic Planning:</b> Set clear objectives, define audiences, and establish performance metrics that guide every step.','<b>Content Creation:</b> Craft high-quality, engaging material that reflects your brand and resonates with your audience.','<b>Workflow Management:</b> Streamline publishing processes to ensure efficiency and consistency across channels.','<b>Performance Optimization:</b> Analyze outcomes regularly, refine approaches, and maximize ROI through data-driven decisions.']}
            text2='A well-built strategy transforms your brand voice into a system that inspires interaction and drives business growth.'
            imageSrc='/images/ContentStrategy/image.png'
            imageAlt='Social-media-marketing-about'
        />
    )
}