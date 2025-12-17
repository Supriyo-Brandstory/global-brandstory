import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const TheCritical = () =>{
    return(
       <CommonAbout 
            title='<h2>The Critical Role of Web Maintenance in Ensuring Website Performance</h2>'
            subtitle='<p>Websites aren’t “set and forget.” They require continuous care to remain secure, fast, and relevant. Without proper maintenance, you risk:</p>'
            text1=""
            points={[
                '<b>Performance issues: </b>Slow loading pages frustrate users and hurt your SEO rankings.',
                '<b>Security vulnerabilities:</b> Outdated software can leave your site exposed to malware and data breaches.',
                '<b>Digital liability:</b> Broken functionality or downtime can harm your brand credibility and cost revenue.',
                '<b>SEO penalties:</b> Neglected sites can lose ranking, reducing organic traffic and leads.'
            ]}
            text2='A proactive approach through website support and proactive web maintenance protects your investment, enhances performance, and ensures your online presence always reflects your brand at its best.'
            imageSrc='/images/WebMaintenenceSupport/image.png' 
            imageAlt='Web Maintenance Professionals'
        />
    )
}