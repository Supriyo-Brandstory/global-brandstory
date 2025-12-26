import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const Tools = () => {
    const title = "Tools We Use to Deliver Polished and Impactful Animations";
    const description = "We use industry-leading software and production techniques to ensure top-notch quality:";
    const footer = "";
    const data = [
        {
            "title": "Adobe After Effects & Illustrator",
            "description": `
                Create smooth animations, motion graphics, and visually engaging sequences that bring concepts to life.
            `
        },
        {
            "title": "Cinema 4D",
            "description": `
               Craft high-quality 3D animations and cinematic visuals for a dynamic, professional look. Layered audio, effects, and voiceovers for immersive soundscapes for enhanced storytelling.
            `
        },
        {
            "title": "DaVinci Resolve",
            "description": `
               Advanced color grading and finishing tools to ensure your videos are polished, consistent, and on-brand.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}