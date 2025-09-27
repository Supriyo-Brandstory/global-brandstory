import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

const BrandIdentity = () => {
  const accordionData = [
    {
      title: "1. Visual Identity That Sticks",
      content:
        "Your Brand Is Remembered By What It Looks And Feels Like. We Create Logos, Color Palettes, Typography, And Brand Guides That Reflect Your Brand’s Personality. Every Design Element Helps People Recognize Your Brand, Trust It, And Understand Your Story, From Corporate Identity To Product Packaging.",
    },
    {
      title: "2. Data-Led Brand Positioning",
      content: "", // Not expanded in the image
    },
    {
      title: "3. Storytelling That Resonates",
      content: "", // Not expanded in the image
    },
    {
      title: "4. Multi-Channel Experience Design",
      content: "", // Not expanded in the image
    },
    {
      title: "5. Corporate And Product Branding",
      content: "", // Not expanded in the image
    },
    {
      title: "6. Complete Rebranding And Brand Refresh",
      content: "", // Not expanded in the image
    },
  ];

  return (
    <>
      <CommonAccordion
        title="Brand Identity Design That Connects and Converts"
        subheding1=""
        subheding2=""
        items={accordionData}
        footer=""
      />
    </>
  )
}

export default BrandIdentity
