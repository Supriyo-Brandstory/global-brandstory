import { CommonBigIndex } from "../common/CommonBigIndex";

export const StrapiRealResults = ({ data }) => {
    const heading = data?.title;
    const description = data?.para;
    // console.log("Consoling the Real Results section : ", data)
    // console.log("Consoling the Cards in the Real Results section : ", data?.casestudyCard)
    const cases1 = data?.casestudyCard.map((item) => ({
        title: item.title,
        description: `  <b>Goal:</b><br/>${item.goal}<br /><br />
    <b>Solution:</b><br/>${item.solution}<br /><br />
    <b>Result:</b><br/>${item.result}`.trim().replace(/\s+/g, " "),

    })) || [];
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

    const footer = data?.bottomPara;
    // console.log("Consoling footer from real results : ", footer)

    return (
        <CommonBigIndex
            data={cases1}
            description={description}
            heading={heading}
            footer={footer}
        />
    );
};