import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyInvesting = () =>{
    return(
       <CommonAbout 
            title='<h2>Why Investing in Website Revamp Services Drives Business Success</h2>'
            subtitle='<p>Your Website Is A Business Engine. When Your Site Struggles With High Bounce Rates, Low Search Rankings, Or Outdated Design, It Creates Friction In Your Customer Journey.</p>'
            text1="<b>A Strategic Website Redesign Can:</b>"
            points={[
                'Increase Conversion Rates Through Intuitive Design And Clear Calls-To-Action.',
                'Improve Organic Traffic With Technical SEO And Performance Optimization.',
                'Build Brand Authority And Trust With Modern Visuals And Compelling Storytelling.',
                'Reduce Bounce Rates By Creating A Seamless, Engaging User Experience.'
            ]}
            text2='Outdated Websites Are Not Just An Aesthetic Problem, They Are A Liability. Our Digital Transformation Approach Ensures Your Website Works Harder For Your Business.'
            imageSrc='/images/WebsiteRevamp/image.png'
            imageAlt='image'
        />
    )
}