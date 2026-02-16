import CommonGridBox3 from "../common/CommonGridBox3";


export const StrapiYourBrand = ({ data }) => {

    // console.log("Consoling the Strapi Your Brand data : ", data);
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE;
    const title = data?.title;
    const description = "";

    const dataNew = data?.cards?.map((card) => ({
        title: card?.title,
        description: card?.para,
        bgcolor: card?.bgcolor,
        logo: strapiUrl + card?.img?.url,
    }))

    const dataOld = [
        {
            "title": "Customized Solutions",
            "description": "Every brand has a unique story, and our professional photography services are personalized to bring it to life. We design photography approaches specific to your brand, whether for corporate, ecommerce photography, or lifestyle campaigns. Every shoot aligns with your marketing objectives.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s23.png"
        },
        {
            "title": "Strategic Execution",
            "description": "We combine strategy, creativity, and technical expertise to deliver visuals that perform. Each project is planned with precision, ensuring perfect lighting, composition, and post production support deliver measurable results and professional photography excellence.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s29.png"
        },
        {
            "title": "Impact Driven Results",
            "description": "With BrandStory, your brand gets a creative photography strategy that is results focused, and built for measurable impact. From concept to delivery, we focus on visuals that elevate your brand, engage your audience, and drive business growth across platforms.",
            "bgcolor": "#c1ba9cff",
            "logo": "/images/square-images/s9.png"
        }
    ];

    return (
        <CommonGridBox3
            boxHeight="350px"
            title={title}
            description={description}
            data={dataNew}
        />
    );
}
