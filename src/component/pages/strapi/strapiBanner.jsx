import { CommonBanner } from "../common/CommonBanner"

export const StrapiBanner = ({ data }) => {
    // console.log("consoling the Strapi Banner data : ", data);

    const buttons = data?.buttons || [];

    return (
        <CommonBanner
            heading={data?.sectionHeading}
            paragraph={data?.orangeText}
            paragraph2={data?.bannerPara}
            // paragraph='<span class="highlited-text">Strategic. Stunning. Story driven photography for modern brands.</span><br/>Beyond beauty lies purpose. Our visuals communicate, connect, and convert. As a leading professional photography agency, we collaborate with global brands to create images that inspire action.<br/>'
            // paragraph2='Our team blends artistic direction with brand strategy, ensuring every photograph aligns with your business objectives. We deliver imagery that defines how your audience sees you.'
            buttonText={buttons[0]?.buttonLabel}
            buttonText2={buttons[1]?.buttonLabel}
            buttonLink={buttons[0]?.buttonUrl}
            buttonLink2={buttons[1]?.buttonUrl}
            renderType="dynamic"
        />
    )
}