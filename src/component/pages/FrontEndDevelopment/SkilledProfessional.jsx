import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const SkilledProfessional = () => {
  const title = "Skilled Professionals Driving<br/>High-Quality Front-End Development"
  const desc = "Our team combines technical expertise with creative vision:"

  const options = [
    {
      heading: "Front-End Developers",
      description:
        "Our Developers Are Skilled In React.js, Vue.js, Angular, And Svelte, Crafting Responsive, High-Performance Interfaces. They Focus On Clean, Modular Code To Ensure Maintainable, Scalable Solutions That Deliver A Seamless User Experience."
    },
    {
      heading: "UI/UX Designers",
      description:
        "Our designers create intuitive and visually compelling interfaces that guide users naturally through your site. Every element is thoughtfully designed to balance aesthetics with functionality, enhancing engagement and conversions."
    },
    {
      heading: "Performance Engineers",
      description:
        "Dedicated performance specialists optimize websites for speed, scalability, and reliability. They fine-tune every aspect—from code efficiency to server performance—to ensure a fast, consistent experience across all devices."
    },
    {
      heading: "QA Specialists",
      description:
        "Our quality assurance team conducts rigorous testing, including cross-browser, device, and end-to-end verification. Their meticulous approach guarantees a bug-free, seamless experience for every visitor from day one."
    }
  ]

  return (
    <CommonOptionSelector 
      title={title} 
      description={desc} 
      options={options} 
      footer="Each project receives dedicated attention from start to finish, ensuring your goals are met with precision and professionalism."
    />
  )
}