import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const ProvenTactics = () => {
  const title = "Proven Tactics for High-Performing<br/>Landing Pages"
  const desc = "We apply proven strategies to ensure your landing page drives results:"

  const options = [
    {
      heading: "Compelling Value Proposition",
      description:
        "Your landing page must immediately communicate why visitors should choose you. A strong headline paired with a supporting sub-headline makes your value crystal clear, creating interest and reducing drop-offs within the crucial first few seconds."
    },
    {
      heading: "Visually Engaging Hero Section",
      description:
        "The hero area is the first thing visitors see—it sets the stage for the entire experience. High-quality visuals, brand-aligned graphics, or even short videos help capture attention instantly, while reinforcing your message and credibility."
    },
    {
      heading: "Strategic Social Proof",
      description:
        "Trust drives conversions. Featuring client testimonials, case studies, recognizable logos, awards, or trust badges reassures visitors that others have benefited from your solution, making it easier for them to take action confidently."
    },
    {
      heading: "Persuasive Copywriting",
      description:
        "Words matter. Well-crafted, benefit-driven copy speaks directly to your audience’s needs and pain points, showing them how your offering solves their problems and delivers real value. Strong CTAs (buttons, links, or forms) ensure visitors know exactly what to do next."
    },
    {
      heading: "Optimized for Speed & UX",
      description:
        "Slow or clunky pages lose leads. A high-performing landing page loads in seconds, is easy to navigate, and ensures every interaction feels smooth—reducing bounce rates and maximizing engagement. With mobile traffic dominating online activity, every landing page must be responsive."
    }
  ]

  return (
    <CommonOptionSelector title={title} description={desc} options={options} />
  )
}