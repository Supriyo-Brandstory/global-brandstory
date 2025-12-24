import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const TechSolutions = () => {
  const title = "Technology Solutions That Drive Results<br/>in Video Editing Services"
  const desc = "We leverage industry-leading software to ensure professional results:" 

  const options = [
    {
      heading: "Adobe Premiere Pro",
      description:
        "Expertly Cut, Assemble, And Polish Footage, Ensuring Smooth Transitions And Professional Pacing."
    },
    {
      heading: "DaVinci Resolve",
      description:
        "Elevate visuals with advanced color grading, giving every frame a cinematic, on-brand look."
    },
    {
      heading: "Adobe After Effects",
      description:
        "Create dynamic motion graphics and visual effects that captivate and clarify your message."
    },
    {
      heading: "Pro Tools & Logic Pro",
      description:
        "Design immersive soundscapes, mix audio seamlessly, and master tracks for maximum impact."
    }
  ]
  const footer =" Our toolkit allows us to handle projects of any scale and complexity while maintaining quality."

  return (
    <CommonOptionSelector title={title} description={desc} footer={footer} options={options} />  
  )
}