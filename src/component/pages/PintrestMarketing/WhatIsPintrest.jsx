import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhatIsPintrest = () =>{
    return(
       <CommonAbout 
            title='<h2>What Is Pinterest Marketing & Why It Matters</h2>'
            subtitle='<p>Pinterest works as a visual search engine. Here, people come with intent to discover, save, and shop. Pins last far longer than posts on other platforms, making it a powerful channel for evergreen content which will keep driving traffic. In fact, 83% of users buy from brands they discover on Pinterest. It is one of the strongest platforms for product discovery and conversions.</p>'
            text1="Business Benefits of Pinterest Marketing:"
            points={['Long lasting visibility with evergreen pins that stay discoverable.','High intent audience searching for ideas, products, and solutions.','Strong purchase behavior, leading to consistent sales growth.','A perfect blend of branding + direct traffic to your website.']}
            text2='<span class="highlited-text">At BrandStory, we align your creative, boards, and ad campaigns with Pinterest’s discovery driven algorithms. This ensures your pins don’t just get seen. They get clicked, saved, and acted on. In fact, clients have seen a 2.5x increase in website traffic and a 40% lift in conversions within just a few months.</span>'
            imageSrc='/images/ppc/about.jpg'
            imageAlt='Social-media-marketing-about'
        />
    )
}