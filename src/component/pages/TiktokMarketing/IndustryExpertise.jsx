import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const IndustryExpertise = () =>{
    return(
       <CommonAbout 
            title='<h2>Industry Expertise: TikTok Solutions<br/>for Every Sector</h2>'
            subtitle='<p>Good creative gets you noticed. Great data helps you grow. Our TikTok reporting process gives you a clear, ongoing view of how your campaigns are performing so you can make faster and confident decisions.</p>'
            text1="We track the right numbers, translate them into real insights, and guide your next move with clarity."
            points={[
                'Weekly and monthly dashboards covering essential campaign metrics like views, engagement, CTR, conversions, and follower growth',
                'Custom reports tailored to your business whether you’re in eCommerce, services, or B2B (including ROAS, CAC, and CPV)',
                'Strategic recommendations based on real-time trends, user behavior, and audience responses'
            ]}
            text2='With transparent ROI tracking, you will always know what’s working, where your budget is going, and what it’s delivering in return.'
            imageSrc='/images/TiktokMarketing/image.png'
            imageAlt='Social-media-marketing-about'
        />
    )
}