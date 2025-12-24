import { CommonOptionSelector2 } from "../common/CommonOptionSelector2"

export const Experts = () => {
  const title = "Experts Focused on Delivering<br/>Creative and Polished Videos"
  const desc = "Our team consists of skilled professionals passionate about visual storytelling:" 

  const options = [
    {
      heading: "Video Editors",
      description:
        "Craft each cut with precision, shaping raw footage into a seamless narrative that engages and resonates with your audience."
    },
    {
      heading: "Motion Graphics Designers",
      description:
        "Bring visuals to life with animated elements and effects that clarify complex ideas and add dynamic appeal."
    },
    {
      heading: "Sound Engineers",
      description:
        "Build immersive audio landscapes, balancing music, effects, and voiceovers to enhance emotion and storytelling impact."
    },
    {
      heading: "Project Managers",
      description:
        "Keep every project on track, coordinating feedback, timelines, and deliverables so your vision is executed flawlessly."
    }
  ]
  const footer = "Each team member brings expertise that elevates your project from raw footage to a<br/>polished masterpiece."

  return (
    <>
      <CommonOptionSelector2 title={title} description={desc} options={options} footer={footer} />
    </>
  )
}