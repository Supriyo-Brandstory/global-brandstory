import { CommonBanner2 } from "../common/CommonBanner2";

export const Banner = () => {
  return (
    <CommonBanner2
      heading="BrandStory Work — Designed for Growth, Built to Lead"
      paragraph="BrandStory has helped over 500+ brands across 30+ industries and 12+ countries gain clarity, shape their voice and grow with purpose since 2015. With over 1200+ projects delivered and $1B+ in revenue generated for our clients, everything we do is focused on one thing — moving the brand forward."
      paragraph2=""
      buttonLink="#"
      buttonText="Partner With BrandStory"
      // buttonLink2 and buttonText2 are currently unused in CommonBanner2 → removed or keep if you plan to add second button later
      points={[
        "across story",
        "strategy",
        "experience",
        "scale",
      ]}
    />
  );
};