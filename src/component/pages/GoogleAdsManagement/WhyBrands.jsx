import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyBrands = () =>{
    return(
       <CommonAbout 
            title='<h2>Why Brands Work with BrandStory</h2>'
            // subtitle='<p>Paid advertising can fast-track business growth, but only when executed strategically. Targeting the right audience with the right message at the right time turns clicks into revenue.</p>'
            // text1="As a leading PPC management agency, BrandStory focuses on:"
            points={['Managed Google Ads in 12+ countries and 7 languages','Audience-first creative aligned to full-funnel goals','Transparent performance dashboards & weekly insights','One team: strategy, design, analytics, optimization','Always-on QA, bid optimization, and CTR lifts']}
            // text2='We measure success in conversions, not impressions. Your ad spend becomes a predictable engine for growth.'
            imageSrc='/images/GoogleAdsManagement/image.png'
            imageAlt='google-ads-management'
        />
    )
}