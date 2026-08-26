import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const StrapiWhyPartner = ({ data }) => {

    // console.log("Consoling the StrapiWhyPartner data : ", data);
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;

    const newData = data?.cards?.map((card) => ({
        title: card?.title,
        description: card?.para,
        logo: card?.img?.url ? strapiUrl + card.img.url : null,
        bg: ""
    }))

    // console.log("Consoling the newData : ", newData);

    const dataOld = [
        {
            logo: "/images/rounded-icons/r60.png",
            title: "Expert Team",
            description: "Our trusted photography partners bring years of industry experience, combining technical skill and creative insight to deliver imagery that strengthens brand identity and market positioning.",
            bg: ""
        },
        {
            logo: "/images/rounded-icons/r90.png",
            title: "Global Standards",
            description: "Across corporate offices, retail, and ecommerce photography campaigns, we maintain strict quality control, ensuring each project meets international standards for professional visual communication.",
            bg: ""
        },
        {
            logo: "/images/rounded-icons/r91.png",
            title: "Tailored Approach",
            description: "Focused on brand storytelling, we design customized visual solutions aligned with your business strategy, resulting in imagery that engages audiences and drives measurable outcomes.",
            bg: ""
        }
    ]

    return (
        <CommonThreeCardBlur
            heading={data?.title}
            subheading={data?.para}
            data={newData}
            footer={data?.bottomPara}
        />
    )
}