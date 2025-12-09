import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyStrategic = () =>{
    return(
       <CommonAbout
            title='<h2>Why Strategic Software Consulting Is Essential for Success</h2>'
            subtitle='<p>Companies invest in tools, platforms, and systems, but instead of simplifying processes, these investments can create complexity. This gap, often called technology debt or digital drag—occurs when technology grows faster than strategy. The result is disconnected systems, manual processes, higher costs, and missed opportunities for growth.</p>'
            text1=""
            points={[]}
            text2='Our software consulting services address this challenge by aligning technology with business goals. Through strategic software consulting, we help organizations streamline operations, modernize their IT landscape, reduce unnecessary costs, and design scalable systems that grow with the business. With the right business technology consulting approach, companies can also build the agility needed to adapt quickly to market changes.<br/><br/><span class="highlited-text">In short, we transform technology from a burden into a powerful driver of competitive advantage.</span>'
            imageSrc='/images/SoftwareConsultingServices/image.png' 
            imageAlt='Consultants discussing software strategy'
        />
    )
}