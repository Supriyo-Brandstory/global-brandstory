import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const Actionable = () => {
  const title = "Actionable Strategies for Effective Software Development";
  const desc = "We help clients succeed through a mix of strategic approaches:"; 

  const options = [
    {
      heading: "Agile + DevOps",
      description:
        "We combine agile practices with DevOps automation to deliver faster, improve continuously, and minimize risks. You get steady progress and quicker time-to-market without sacrificing quality."
    },
    {
      heading: "Scalable Architecture",
      description:
        "Your business will grow—and your software should grow with it. We design scalable systems that perform today and adapt seamlessly to tomorrow’s demands."
    },
    {
      heading: "User-Centric Design",
      description:
        "Technology should work for people, not the other way around. Our focus on intuitive, user-first design creates seamless experiences that drive adoption and satisfaction."
    },
    {
      heading: "Security First",
      description:
        "From compliance to advanced security measures, protection is built into every layer of development. We safeguard your data and operations so you can innovate with confidence."
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