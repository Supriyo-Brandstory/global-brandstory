import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

const StructuredGrowth = () => {
  const accordionData = [
    {
      title: "Awareness",
      content:
        "Getting Your Brand In Front Of Decision-Makers Through Social Media Campaigns, Content Marketing, And Trade Journals.",
    },
    {
      title: "Consideration",
      content: "", // Content for this stage is not provided in the image
    },
    {
      title: "Conversion",
      content: "", // Content for this stage is not provided in the image
    },
    {
      title: "Retention",
      content: "", // Content for this stage is not provided in the image
    },
  ];

  return (
    <>
      <CommonAccordion
        title="Structured B2B Growth with BrandStory"
        subheding1=""
        subheding2="We Structure B2B Marketing Strategy Around Four Stages:"
        items={accordionData}
      />
    </>
  )
}

export default StructuredGrowth
