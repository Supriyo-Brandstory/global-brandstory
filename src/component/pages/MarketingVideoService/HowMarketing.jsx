import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const HowMarketing = () =>{
    return(
       <CommonAbout 
            title='<h2>How Marketing Video Services Enhance Customer Connections</h2>'
            subtitle='<p>Every scroll, swipe, or click is an opportunity to connect or a chance lost. Marketing video services give your brand a voice that resonates, communicates, and builds trust in ways static content simply can’t.</p>'
            text1="A compelling video creates an emotional connection that drives consumer engagement. By combining visuals, sound, and narrative, you can:"
            points={[
                'Increase conversion rates by over 80% on landing pages',
                'Boost brand recall and trust',
                'Generate more social and website engagement',
                'Improve SEO and organic traffic'
            ]}
            text2='The right video strategy turns casual browsers into loyal customers and transforms your marketing from routine to remarkable.'
            imageSrc='/images/MarketingVideoService/image.png'
            imageAlt='Professional video production set'
        />
    )
}