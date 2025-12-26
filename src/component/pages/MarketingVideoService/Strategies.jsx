import { CommonOptionSelector } from "../common/CommonOptionSelector";

export const Strategies = () => {
  const title = "Strategies That Help Marketing Videos<br/>Achieve Maximum Impact";
  const desc = "A great video is more than a production—it’s a strategic tool. Our strategies include:";

  const options = [
    {
      heading: "The Compelling Hook",
      description:
        "We Design Every Video To Capture Attention In The Crucial First 3–5 Seconds. With Bold Visuals, Impactful Storytelling, Or Intriguing Questions, We Ensure Viewers Stop Scrolling And Start Watching."
    },
    {
      heading: "Brand-Centric Narrative",
      description:
        "At the heart of every video is your brand story. We focus on the real problems your product or service solves, creating narratives that feel authentic, relatable, and tailored to your audience’s needs."
    },
    {
      heading: "Crystal-Clear CTA",
      description:
        "Every video is crafted with a purpose. Whether it’s driving clicks, sign-ups, or purchases, we include clear and persuasive calls-to-action that guide viewers toward meaningful engagement."
    },
    {
      heading: "Multi-Platform Repurposing",
      description:
        "Your content shouldn’t be limited to one channel. That’s why we create adaptable video cuts for social media, websites, and email campaigns—ensuring your brand delivers a consistent message everywhere your audience is."
    }
  ];
  
  const footer = "Each video is designed to maximize engagement, boost conversions, and provide long-term brand value.";

  return (
    <CommonOptionSelector
      title={title}
      description={desc}
      options={options}
      footer={footer}
    />
  );
};