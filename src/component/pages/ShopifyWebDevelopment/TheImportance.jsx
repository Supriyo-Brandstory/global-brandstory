import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const TheImportance = () => {
    const data = {
        heading: "The Importance of Shopify Web Development<br/>in Simplifying Store Management",
        subHeading: "A generic theme or off-the-shelf solution might get your store live quickly—but it often creates barriers to growth. Businesses fall into what we call the ecommerce growth trap:",
        rows: [
            {
                img: "/images/ShopifyWebDevelopment/1.png", 
                alt: "Shopify Ecommerce Growth Trap",
                text: [
                    "<li>Slow loading speeds that frustrate customers<br/><br/></li>",
                    "<li>Limited flexibility when scaling operations<br/><br/></li>",
                    "<li>Poor user experience that kills conversions<br/><br/></li>",
                    "<li>Generic branding that fails to stand out</li>"
                ],
                reverse: false
            },
            {
                img: "/images/ShopifyWebDevelopment/2.png",
                alt: "Custom Shopify Web Development Benefits",
                text: [
                    "That’s Why Custom Shopify Web Development Is So Important. A Bespoke Store Ensures You:<br/><br/>",
                    "<li><b>Maximize performance</b> – Fast, mobile-optimized, and SEO-friendly<br/><br/></li>",
                    "<li><b>Enhance customer experience</b> – Frictionless journeys from browsing to checkout<br/><br/></li>",
                    "<li><b>Strengthen your brand</b> – Unique design that reflects your identity<br/><br/></li>",
                    "<li><b>Unlock scalability</b> – Infrastructure that grows with your business</li>"
                ],
                reverse: true
            }
        ]
    };

    return (
        <CommonTwoImgDesc data={data} />
    )
}