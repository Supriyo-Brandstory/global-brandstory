import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const WhyPartner = ()=>{
    const data = [
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
       heading="Why Partner With BrandStory?"
       subheading="Combining creativity with precision, BrandStory delivers professional imaging that elevates brand perception and drives business results."
       data={data}
       footer="Partner with BrandStory to create visuals that not only impress but also communicate your brand’s value. Our professional photography services enhance engagement and deliver tangible business results."
       />
    )
}