import React from "react";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const Tactics = () => {
  const title = "Tactics That Help Videos Stand Out in a<br/>Crowded Digital Space";
  const description = "Our strategies include:";
  const data = [
    {
      title: "Strategic Pacing & Rhythm",
      description: "Every cut, transition, and moment is carefully orchestrated to build tension, excitement, or emotional resonance. We ensure the narrative flows naturally, keeping viewers engaged and invested from start to finish.",
      bgcolor: "#6d3119",
      logo: "/images/square-images/s51.png"
    },
    {
      title: "Cinematic Color Grading",
      description: "Raw footage is elevated through meticulous color correction and grading. The result is a polished, on-brand visual experience that feels consistent, professional, and visually compelling across every frame.",
      bgcolor: "#474574",
      logo: "/images/square-images/s66.png"
    },
    {
      title: "Immersive Sound Design",
      description: "We layer ambient sounds, effects, and music to enrich each scene. The soundscape not only captivates the audience but also reinforces the mood, emotion, and messaging of your video.",
      bgcolor: "#3e484b",
      logo: "/images/square-images/s67.png"
    },
    {
      title: "Dynamic Motion Graphics & Visual Effects",
      description: "Custom animations and on-screen graphics bring clarity, engagement, and visual flair. These elements help highlight key points, make complex ideas digestible, and leave a lasting impression on viewers.",
      bgcolor: "#6d3119",
      logo: "/images/square-images/s68.png"
    }
  ];
  const footer ="These strategies ensure higher viewer retention, improved brand perception, and<br/>increased conversion rates."

  return (
    <>
      <CommonGridBox3Scrollable boxHeight="360px" title={title} description={description} data={data} footer={footer}/>
    </>
  );
};