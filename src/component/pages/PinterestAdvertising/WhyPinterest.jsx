import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyPinterest = () =>{
    return(
       <CommonAbout 
            title='<h2>Why Pinterest Ads Work for Brands</h2>'
            subtitle='<p>Pinterest ads aren’t like regular social ads that disappear in a few days. Pins last much longer, they stay on the platform for weeks or even months, continuing to bring attention to your brand.</p>'
            text1="This is because Pinterest offers:"
            points={[
                '<b>Evergreen content</b> – Once your pin is posted, it continues to attract people over time. This continued visibility keeps your brand in front of potential customers without constant effort.',
                '<b>High intent</b> – People are usually of interest to get some ideas, products and inspiration they are ready to act on. This means your pins will reach the right audience who are already on the look out for what you offer.',
                '<b>Better engagement</b> – Pins are mostly saved, shared and clicked than the regular posts. This improves the reach and helps your brand get discovered by more people.'
            ]}
            text2='This makes Pinterest a powerful channel to reach people at the top and middle of the funnel. It not only builds awareness but also helps drive consideration and conversions.'
            imageSrc='/images/PinterestAdvertising/image.png' // Keep or replace with the image from the context if it's available in your asset folder.
            imageAlt='Pinterest Ads'
        />
    )
}