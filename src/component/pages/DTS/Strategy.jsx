import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const Strategy = () => {
     const accordionData = [
    {
      title: "1. Future Ready Cloud Infrastructure",
      content:
        `We Help Enterprises Become Cloud-Ready With Secure, Scalable, And Innovation Ready Platforms. Whether Migrating Or Building Cloud-Native Solutions, Your Infrastructure Is Designed For Agility And Resilience.
        `,
    },
    {
      title: "2. Intelligent Workflow Automation",
      content:
        ``, 
    },
    {
      title: "3. Resilient Cloud Native Architecture",
      content:
        ``, 
    },
    {
      title: "4. Lower Total Cost Of Ownership",
      content:
        ``, 
    },
    {
      title: "3. Modernizing Legacy Systems",
      content:
        ``, 
    },
  ];
  return (
        <>
            <CommonAccordion
                title="Strategy to Scale: What Our Digital</br>Transformation Services Cover"
                subheding2="At BrandStory, We Define The Why, What, And How Of Transformation Through A Strategic Lens. Our Digital Transformation Consulting Services Create A Roadmap Which Scales With Your Business. From Planning To Execution, We Make Sure Every Initiative Delivers Measurable, Long Term Value."
                items={accordionData} 
                footer="Transform your business with precision and purpose. Every initiative is focused on delivering growth, efficiency, and lasting value.</br></br><span class='highlited-text' >Measurable Client Impact:</span></br>Clients see tangible results: a leading interior design brand achieved a 300% increase in leads and 350% growth in organic traffic. Our solutions deliver transformation that truly scales." 
                paddingBottom={0}  
            />
        </>
    )
}