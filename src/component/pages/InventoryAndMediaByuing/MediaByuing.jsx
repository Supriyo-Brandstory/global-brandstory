import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const MediaByuing = () =>{
    return(
       <CommonAbout 
            
            title='<h2>Media Buying Strategy for Better ROAS</h2>'
            subtitle='<p>At BrandStory, Every Media Buying Strategy Starts With a Performance Goal. Whether You Are Launching A Product Or Retargeting Past Visitors, We Align Inventory And Creatives To Move Users Through Your Funnel.</p>'
            text1="<b>We Focus On:</b>"
            points={[
                'Audience Targeting At Scale Using A Blend Of Demographic, Behavioral, Contextual, And Intent-Based Data To Reach High Value Users',
                'Funnel Based Buying That Aligns Media Formats And Placements With Where The Audience Is Awareness, Consideration, Or Conversion',
                'Frequency Capping To Manage Exposure, Reduce Ad Fatigue, And Maintain Brand Recall Without Oversaturation',
                'Multi-Channel Buying Strategies That Ensure Consistent Messaging Across Display, OTT, Mobile, Audio, And Social Platforms'
            ]}
            text2='<span class="highlited-text">When Every Touchpoint Is Optimized For Performance, We Drive Measurable Outcomes Not Just Impressions. This Is How We Deliver Consistent ROAS Optimization Across Every Campaign We Manage.</span>'
            imageSrc='/images/InventoryAndMediaByuing/image-2.png' 
            imageAlt='Person checking logistics paperwork near a laptop' 
            imageReverse='true'
        />
    )
}