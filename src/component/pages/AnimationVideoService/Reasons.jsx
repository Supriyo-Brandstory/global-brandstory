import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const Reasons = () => {
  const title = "Reasons Companies Prefer Brandstory<br/>Global for Animation Projects"
  const desc = "We combine experience, expertise, and trust to make every animation a success:"

  const options = [
    {
      heading: "Expert Animation Studio",
      description:
        "With 10+ Years Of Experience Crafting Animations For Startups, Enterprises, And Agencies, We Create Content That Is Visually Stunning, Engaging, And Strategically Aligned With Your Brand. Every Animation Is Designed To Communicate Your Story Effectively While Leaving A Lasting Impression."
    },
    {
      heading: "Dedicated Creative Team",
      description:
        "Our team of designers, animators, strategists, and project managers work together seamlessly. From concept to final render, every stage is coordinated to ensure your vision is translated into dynamic, high-quality animations."
    },
    {
      heading: "Transparent & Collaborative Process",
      description:
        "We maintain clear communication, structured timelines, and defined revision cycles. You’re involved throughout the process, ensuring that every creative decision aligns with your goals while staying efficient and on schedule."
    },
    {
      heading: "Advanced Creative Expertise",
      description:
        "Beyond technical skills, we bring storytelling, motion design, and visual innovation to each project. Our animations engage your audience, simplify complex ideas, and strengthen your brand presence across platforms."
    }
  ]

  return (
    <CommonOptionSelector title={title} description={desc} options={options} />
  )
}