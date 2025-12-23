import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const RoleOf = () =>{
    return(
       <CommonAbout 
            title='<h2>Role of Front-End Development in<br/>Website Performance</h2>'
            subtitle='<p>A website or application is often your first impression online. A seamless, fast, and intuitive interface keeps users engaged, builds trust, and drives conversions. Front-end development is more than writing code, it’s about shaping interactions, guiding users, and enhancing your brand presence digitally.</p>'
            text1="Modern users expect websites to:"
            points={[
                'Load instantly, regardless of device',
                'Be easy to navigate and visually appealing',
                'Function flawlessly across browsers',
                'Reflect the brand’s identity and values'
            ]}
            text2='' 
            imageSrc='/images/FrontEndDevelopment/image.png'
            imageAlt='Front-end development and coding visualization'
        />
    )
}