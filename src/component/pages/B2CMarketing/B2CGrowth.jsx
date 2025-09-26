import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

const B2CGrowth = () => {
  const accordionData = [
    {
      title: "Awareness",
      content:
        "Getting Your Brand In Front Of Decision-Makers Through Social Media Campaigns, Content Marketing, And Trade Journals.",
    },
    {
      title: "Engagement",
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
        title="The BrandStory B2C Growth Framework"
        subheding1=""
        subheding2="Our B2C marketing strategy works across four stages:"
        items={accordionData}
        footer="This framework strengthens the consumer sales funnel and creates lasting relationships through structured B2C campaign planning."
      />
    </>
  )
}

export default B2CGrowth
