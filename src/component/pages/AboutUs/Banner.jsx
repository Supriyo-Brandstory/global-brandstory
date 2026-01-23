import { CommonBanner2 } from "../common/CommonBanner2";

export const Banner = () => {
    return (
        <CommonBanner2
            heading="BrandStory — Powering Global Brands with Strategy, Creativity, and Results"
            paragraph="Since 2015, we’ve helped B2B companies around the world move from noise to narrative, from tactics to traction, and from visibility to velocity. Our work isn't about vanity metrics — it’s about transformation. "
            points={[
                "Strategy","DESIGN","MARKETING","VIDEO","DEVELOPMENT","ANALYTICS"
            ]}
            buttonText="Partner With BrandStory"
            buttonLink="#"
        />
    );
}