import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyIos = () =>{
    return(
       <CommonAbout 
            title='<h2>Why iOS App Development Plays a Key<br/>Part in Digital Transformation Strategies</h2>'
            subtitle='<p>Apple users expect intuitive design, fast performance, and seamless experiences across their devices. A high-quality iOS app can:</p>'
            points={[
                'Drive brand loyalty and repeat engagement',
                'Unlock revenue through in-app purchases, subscriptions, and premium services',
                'Strengthen your brand perception through secure, polished digital experiences',
                'Access a high-value audience with greater spending power'
            ]}
            text2='Simply put, an iPhone app isn’t just another channel, it’s a strategic asset for long-term growth.'
            imageSrc='/images/IosAppDevelopment/image.png'
            imageAlt='Why iOS App Development'
        />
    )
}