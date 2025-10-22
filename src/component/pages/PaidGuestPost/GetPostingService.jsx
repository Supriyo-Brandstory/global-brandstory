import CommonAccordion2 from '../common/CommonAccordion2';

export const GetPostingService = () => {
  const accordionData = [
    {
      title: "Industry Authority Guest Posts",
      content:
        "", // Content is left empty as there is no visible open content for this point in the image
    },
    {
      title: "Niche Blogger Outreach",
      content:
        "", // Content is left empty as there is no visible open content for this point in the image
    },
    {
      title: "Sponsored Editorials On High-Traffic Sites",
      content:
        "", // Content is left empty as there is no visible open content for this point in the image
    },
    {
      title: "Traffic-Driven Guest Posts",
      content:
        "", // Content is left empty as there is no visible open content for this point in the image
    },
    {
      title: "Guest Blogging For ECommerce Brands",
      content:
        "", // Content is left empty as there is no visible open content for this point in the image
    },
    {
      title: "SaaS And B2B Tech-Focused Guest Posts",
      content:
        "", // Content is left empty as there is no visible open content for this point in the image
    },
    {
      title: "Local Guest Posting For Regional Visibility",
      content:
        "", // Content is left empty as there is no visible open content for this point in the image
    },
    {
      title: "Guest Posts With Built-In Content Syndication",
      content:
        "", // Content is left empty as there is no visible open content for this point in the image
    },
  ];

  return (
    <CommonAccordion2
      title="Guest Posting Services That Fit Your Growth Plan"
      description="Every Business Has A Different Reason For Using Guest Posting. Some Want A Stronger Search Presence, Others Want Brand Recognition, Some Want Both. That's Why We Offer A Range Of Guest Posting Options That Align With Your Current Growth Goals."
      items={accordionData}
      splitRatio={0.5} 
    />
  );
};
