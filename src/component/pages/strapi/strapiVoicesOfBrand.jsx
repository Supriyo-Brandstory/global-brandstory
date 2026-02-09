import { CommonWhiteRedCard } from "../common/CommonWhiteRedCard"

export const StrapiVoiceOfBrands = ({ data }) => {

    const storiesData = {
        title: data?.title,
        cards: [
            {
                name: "Ravi Menon",
                role: "Marketing Head of Leading Retail Brand, Bangalore",
                testimonial: "“Working with BrandStory was an amazing experience. The corporate headshots and team photos elevated our brand identity instantly. I would really appreciate their professionalism and attention to detail.”"
            },
            {
                name: "Meera Iyer",
                role: "Creative Director of a Fashion Startup, Mumbai",
                testimonial: "The lookbook shoot went really smooth. They captured our style perfectly, and we now have images that really tell our brand story."
            }
        ]
    }

    const cards = data?.testimonials?.map((item) => ({
        name: item?.author,
        role:item?.position,
        testimonial:item?.review,
    }))

    return <CommonWhiteRedCard title={storiesData.title} cards={cards} />
}
