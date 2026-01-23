import CommonWhiteGrid from "../common/CommonWhiteGrid";

export const Grid = () => {
  const data = [
    {
      stat: "500+",
      statIcon: "/images/AboutUs/1.svg",
      title: "Clients Worldwide",
      description: "Startups to global enterprises — we scale stories, not just campaigns.",
      size: "sm"
    },
    {
      stat: "1200+",
      statIcon: "/images/AboutUs/2.svg",
      title: "Projects Delivered",
      description: "Designed to accelerate web, brand, performance, and product.",
      size: "sm"
    },
    {
      stat: "12+",
      statIcon: "/images/AboutUs/3.svg",
      title: "Countries Served",
      description: "With local fluency and global intelligence.",
      size: "sm"
    },
    {
      stat: "92%",
      statIcon: "/images/AboutUs/4.svg",
      title: "Client Retention Rate",
      description: "Our partnership stays because we deliver what matters.",
      size: "sm"
    },
    {
      stat: "150+",
      statIcon: "/images/AboutUs/5.svg",
      title: "Experts Across Disciplines",
      description: "Strategy-led. Outcome-obsessed.",
      size: "sm"
    },
    {
      stat: "11+",
      statIcon: "/images/AboutUs/6.svg",
      title: "Years of B2B Experience",
      description: "Insight-driven, not assumption-led.",
      size: "sm"
    },
    {
      stat: "$1B+",
      statIcon: "/images/AboutUs/7.svg",
      title: "Revenue Generated",
      description: "We don't just advertise. We accelerate.",
      size: "sm"
    },
    {
      stat: "10M+",
      statIcon: "/images/AboutUs/8.svg",
      title: "Leads Delivered",
      description: "Demand that drives real business value.",
      size: "sm"
    },
    {
      stat: "5.5x",
      statIcon: "/images/AboutUs/9.svg",
      title: "Average Organic Growth",
      description: "For clients on long-term retainers.",
      size: "sm"
    },
    {
      stat: "140M+",
      statIcon: "/images/AboutUs/10.svg",
      title: "Content Views",
      description: "Across YouTube, Reels, organic and paid ecosystems.",
      size: "lg"
    },
  ];

  return <CommonWhiteGrid data={data} />;
};
