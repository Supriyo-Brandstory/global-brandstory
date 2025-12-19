import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyCrossPlatform = () =>{
    return(
       <CommonAbout 
            title='<h2>Why Cross-Platform App Development Is Essential for Efficient App Management</h2>'
            subtitle='<p>Cross-platform mobile apps let you engage millions of users across iOS and Android with one robust solution. Choosing the right development strategy is about market reach, cost-efficiency, and speed to market. With frameworks like Flutter and React Native, we build apps that deliver near-native performance, consistent design, and seamless functionality, all from a single codebase.</p>'
            text1="The benefits are clear:"
            points={[
                '<b>Broader Market Reach</b> – Access over 98% of smartphone users worldwide.',
                '<b>Accelerated Time-to-Market</b> – Launch faster than competitors.',
                '<b>Lower Total Cost of Ownership (TCO)</b> – Maintain and update one codebase instead of two.',
                '<b>Scalability & Future-Proofing</b> – Easily add features and adapt to growing user needs.'
            ]}
            text2=''
            imageSrc='/images/CrossPlatformAppDevelopment/image.png'
            imageAlt='Why Cross-Platform App Development'
        />
    )
}