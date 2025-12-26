import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const ThePeople = () => {
  const title = "The People Behind Exceptional<br/>Animation Services";
  const desc = "Our team is made up of specialists who excel in their fields:"; 

  const options = [
    {
      heading: "Video Strategists",
      description:
        "They shape the vision and purpose of every project, planning the concept, narrative flow, and how the video will achieve your business goals."
    },
    {
      heading: "Storyboard Artists",
      description:
        "Before a single frame is animated, these artists bring the story to life on paper, mapping scenes and sequences to ensure clarity and impact."
    },
    {
      heading: "Animators",
      description:
        "Skilled in 2D, 3D, and motion graphics, they transform concepts and storyboards into engaging, visually compelling animations that capture attention."
    },
    {
      heading: "Project Managers",
      description:
        "They orchestrate the team, timelines, and client communications, ensuring projects run smoothly, deadlines are met, and expectations are exceeded."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
    />
  );
};