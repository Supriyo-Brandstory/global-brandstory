import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const MasteringVisuals = () => {
  const title = "Mastering Visuals Across Every Industry";
  const desc = ""; // Left empty as per original (no intro paragraph)

  const options = [
    {
      heading: "Corporates",
      description:
        "Brand Story defines visual standards for every sector. We produce executive visual content to position your brand as a leader. Our headshots, team portraits, and office imagery reflect professionalism. Every frame is crafted with studio grade lighting and careful composition. We ensure your brand presence is instantly recognizable and commanding. With BrandStory, your corporate image speaks volumes before a word is said."
    },
    {
      heading: "Ecommerce",
      description:
        "Our conversion focused visuals make products irresistible online. From high impact product shots to dynamic lifestyle imagery, every image drives clicks, engagement, and sales. We deliver high resolution imagery bringing your ecommerce brand to life across digital platforms. Our styling, lighting, and precision elevate your offerings above competitors. With us, your online presence isn’t just seen, it is desired."
    },
    {
      heading: "Hospitality",
      description:
        "We turn dishes, interiors, and experiences into visual statements with culinary photography expertise. Our styling, lighting, and composition highlight textures, colors, and atmosphere with excellent precision. Every image draws attention, entices guests, and reinforces your brand personality. We craft visuals which make people stop scrolling and step inside. At BrandStory, hospitality photography becomes a business driver."
    },
    {
      heading: "Architecture",
      description:
        "We showcase spaces with architectural imaging mastery which impresses investors and clients as well. From interiors to exteriors, our precision captures every detail, angle, and light effect. Advanced perspective correction ensures images are flawless and true to life. Each property is presented as a premium offering, reflecting scale, quality, and design excellence. With BrandStory, real estate and architecture photography isn’t just documentation, it is an experience."
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