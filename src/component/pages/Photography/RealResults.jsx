import { CommonBigIndex } from "../common/CommonBigIndex";

export const RealResults = () => {
  const heading = "Real Results, Proven Impact";
  const description = "Explore how BrandStory’s professional photography services have driven tangible results across industries. Each project highlights our approach, execution, and outcomes.";

  const cases = [
    {
      title: "Corporate Rebrand Photoshoot",
      description: `
        <b>Goal:</b><br/>Refresh corporate imagery and strengthen brand positioning.<br /><br />
        <b>Solution:</b><br/>Conducted professional headshots, team portraits, and office visuals with consistent lighting and composition.<br /><br />
        <b>Result:</b><br/>Increased internal engagement by 40% and enhanced brand credibility across marketing channels.
      `.trim().replace(/\s+/g, ' '),
    },
    {
      title: "Ecommerce Product Launch",
      description: `
        <b>Goal:</b><br/> Deliver high-converting product visuals for a new online line.<br /><br />
        <b>Solution:</b> <br/>Captured lifestyle shots, 360° product photography, and optimized ecommerce images for digital storefronts.<br /><br />
        <b>Result:</b> <br/>Boosted online sales by 35% and reduced product return rates by 12%.
      `.trim().replace(/\s+/g, ' '),
    },
    {
      title: "Luxury Restaurant Campaign",
      description: `
        <b>Goal:</b> <br/>Highlight culinary offerings and elevate brand image.<br /><br />
        <b>Solution:</b> <br/>Styled food photography with professional lighting, plating, and chef collaboration for social media and menus.<br /><br />
        <b>Result:</b> <br/>Increased table bookings by 50% and social media engagement by 60%, driving measurable ROI.
      `.trim().replace(/\s+/g, ' '),
    },
  ];

  const footer = "Because at BrandStory, impact isn’t claimed. It is captured and delivered.";

  return (
    <CommonBigIndex
      data={cases}
      description={description}
      heading={heading}
      footer={footer}
    />
  );
};