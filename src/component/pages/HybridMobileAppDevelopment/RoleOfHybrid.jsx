import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const RoleOfHybrid = () =>{
    return(
       <CommonAbout 
            title='<h2>Role of Hybrid Mobile App Development in Mobile Growth</h2>'
            subtitle='<p>In today’s mobile-first world, having an app that reaches both iOS and Android users is essential. But building separate native apps for each platform can be expensive, time-consuming, and difficult to maintain. That’s where hybrid mobile app development comes in.</p>'
            text1="Hybrid apps are built using a single codebase and frameworks like Flutter and React Native, letting your business launch faster, reduce costs, and reach a broader audience without compromising performance.<br/><br/>Here’s why hybrid development is more than just a convenience:"
            points={[
                '<b>Broader Market Reach:</b> Target over 98% of smartphone users instantly.',
                '<b>Accelerated Time-to-Market:</b> Launch faster than competitors and capture early market share.',
                '<b>Lower Total Cost of Ownership:</b> Maintain one codebase instead of two separate apps.',
                '<b>Scalability & Future-Proofing:</b> Modular frameworks allow your app to grow alongside your business.'
            ]}
            text2='Whether you’re a startup looking to launch quickly or an enterprise modernizing its mobile presence, hybrid development gives you the flexibility, speed, and efficiency needed to succeed.'
            imageSrc='/images/HybridMobileAppDevelopment/image.png'
            imageAlt='Hybrid Mobile App Development'
        />
    )
}