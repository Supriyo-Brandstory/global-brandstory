import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const OurRole = () =>{
    return(
       <CommonAbout 
            title='<h2>Our Role in Optimizing Business Data</h2>'
            subtitle='<p>Enterprises often struggle with legacy databases that slow reporting and compromise integrity. E-commerce businesses lose customer trust when transactions lag or fail. These challenges are more than technical, they directly impact business growth, customer experience, and profitability.</p>'
            text1="Our tailored database solutions are designed to solve these problems head-on. They deliver:"
            points={[
                '<b>Scalability</b> that supports growth without disruption.',
                '<b>Performance optimization</b> to keep operations running smoothly.',
                '<b>Data integrity</b> for reliable decision-making.',
                '<b>Security and compliance</b> that safeguard critical information.',
                '<b>Customer satisfaction</b> through faster, seamless digital experiences.'
            ]}
            text2=''
            imageSrc='/images/EnterpriseSoftwareDevelopment/image.png' 
            imageAlt='Consultants discussing website optimization on a computer monitor'
        />
    )
}