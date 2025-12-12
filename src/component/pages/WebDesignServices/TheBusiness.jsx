import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const TheBusiness = () =>{
    return(
       <CommonAbout 
            title='<h2>The Business Benefits of Investing in Web Design</h2>'
            subtitle="<p>A Well-Designed Website Does More Than Look Good. It Shapes How Users Perceive Your Brand, Drives Engagement, And Directly Impacts Revenue. Here's Why Investing In Professional Web Design Is Essential:</p>"
            text1="<b>Our Approach Focuses On Five Key Areas:</b>"
            points={[
                '<b>User Experience Matters:</b> Visitors Leave Sites That Are Confusing Or Slow. Our UX/UI-Focused Designs Make Navigation Intuitive And Enjoyable.',
                '<b>Brand Authority:</b> Cohesive Visuals And Messaging Strengthen Trust And Credibility.',
                '<b>Responsive Design:</b> With Most Users Browsing On Mobile Devices, Your Site Must Look Perfect Everywhere.',
                '<b>Conversion Focused:</b> Every Design Decision Guides Users Toward Meaningful Actions, Boosting Leads And Sales.',
                '<b>SEO Advantage:</b> Clean Code, Fast Loading, And Structured Content Improve Search Rankings.'
            ]}
            text2=''
            imageSrc='/images/WebDesignServices/image.png' 
            imageAlt='Web-Design-about'
        />
    )
}