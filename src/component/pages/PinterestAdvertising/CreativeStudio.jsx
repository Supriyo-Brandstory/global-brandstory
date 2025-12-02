import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const CreativeStudio = () => {
  const title = "Creative Studio for<br/>High-Performance Pins"; 
  const desc = "Pins need to stand out to get clicks. Our team designs pins that people stop scrolling for."; 

  const options = [
    {
      heading: "Storytelling", 
      description:
        "Every pin shares your brand’s message clearly and simply. This helps users understand what your brand offers and why it matters, making it easier for them to connect and engage."
    },
    {
      heading: "SEO-optimized", 
      description:
        "We add the right keywords to titles and descriptions so your pins show up in relevant Pinterest searches. This increases discoverability and ensures your content reaches people who are actively looking for ideas or products like yours."
    },
    {
      heading: "Clear CTA", 
      description:
        "Each pin includes a call-to-action that encourages viewers to take the next step, like visiting your website, exploring a product, or saving the pin. The CTA is placed naturally so it drives action without feeling pushy."
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