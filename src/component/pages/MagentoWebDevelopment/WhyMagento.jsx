import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyMagento = () => {
    return (
       <CommonAbout 
            title='<h2>Why Magento Is a Key Platform for<br/>Long-Term E-Commerce Growth</h2>'
            subtitle='<p>Choosing the right ecommerce platform can make or break your growth. Magento stands out for businesses looking for:</p>'
            points={[
                '<b>Scalability – </b>Handles high-volume traffic with ease.',
                '<b>Flexibility – </b>Fully customizable for unique business needs.',
                '<b>Integration-friendly – </b>Connects seamlessly with ERP, CRM, and marketing systems.',
                '<b>B2B Capabilities – </b>Supports complex pricing, quote management, and self-service dashboards.'
            ]}
            text2='In a digital world where customers expect frictionless experiences, a tailored Magento solution ensures your store performs, converts, and grows with your business.'
            imageSrc='/images/MagentoWebDevelopment/image.png'
            imageAlt='Two professionals discussing e-commerce strategy in front of a computer monitor'
        />
    )
}