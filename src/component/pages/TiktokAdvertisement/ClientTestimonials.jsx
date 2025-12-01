import { CommonWhiteRedCard } from "../common/CommonWhiteRedCard"

export const ClientTestimonials = () => {
  const storiesData = {
    title: "Client Testimonials",
    cards: [
      {
        name: "CMO,",
        role: "Leading D2C Apparel Brand",
        testimonial: "“Our ROAS hit 4x within the first month. The TikTok ad management process was data-driven, transparent, and fast-moving – exactly what we needed to scale fast.”"
      },
      {
        name: "VP Marketing,",
        role: "Global Beauty Brand",
        testimonial: "“The creative approach felt native and authentic to the platform. Engagement soared, conversions exceeded projections, and the campaign became our top-performing channel in weeks.”"
      }
    ]
  }

  return <CommonWhiteRedCard title={storiesData.title} cards={storiesData.cards} />
}