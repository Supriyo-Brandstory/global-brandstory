import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const MeetTheExperts = () => {
  const title = "Meet the Experts Behind Your Shopify Store Development";
  const desc = "Our team is made up of:"; 

  const options = [
    {
      heading: "UX/UI Designers",
      description:
        "Our designers craft intuitive, customer-focused interfaces that make shopping simple, engaging, and enjoyable—turning browsers into buyers."
    },
    {
      heading: "Shopify Developers",
      description:
        "With deep expertise in Liquid, custom coding, and Shopify Plus development, our developers bring flexibility and functionality to every store we build."
    },
    {
      heading: "App Developers",
      description:
        "When off-the-shelf tools aren’t enough, our app developers create and integrate custom Shopify apps to extend your store’s capabilities and streamline operations."
    },
    {
      heading: "Performance Specialists",
      description:
        "From lightning-fast load times to improved search visibility, our specialists ensure your store not only attracts customers but also keeps them engaged."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
      footer="Together, we combine creativity and technical expertise to deliver Shopify stores that perform at every level."
    />
  );
};