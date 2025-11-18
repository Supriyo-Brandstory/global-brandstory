import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const YoutubeCampaign = () => {
    const title = "YouTube Campaign Solutions Customized for Your Industry";
    const description = "Our campaigns are tailored for each industry:";
    const footer = "Each strategy leverages proven tactics to increase engagement, subscribers, and conversions in your sector.";
    const data = [
        {
            "title": "Ecommerce YouTube Marketing",
            "description": `
                We create videos like product demos, unboxing, and customer reviews to show your products in action and help people decide to buy.
            `
        },
        {
            "title": "B2B Video Marketing",
            "description": `
               We produce thought-leadership videos and case studies that build your brand’s authority and show expertise in your field.
            `
        },
        {
            "title": "Education & Healthcare",
            "description": `
               We make informative videos that educate viewers and build trust, helping your audience feel confident in your services or programs.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} paddingBottom="0px" />
    );
}