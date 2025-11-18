import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const YoutubeLive = () => {
    const title = "YouTube Live Streaming, Premieres<br/>& Interactive Experiences";
    const description = "Live content brings your audience closer to your brand. We manage:";
    const footer = "Interactive content strengthens audience loyalty, increases watch time, and turns viewers into active participants in your brand story.";
    const data = [
        {
            "title": "Live streaming setup",
            "description": `
                We help you set up live streams for events, product launches, or Q&A sessions so your audience can watch in real time.
            `
        },
        {
            "title": "Premieres with hype-building",
            "description": `
               We schedule video premieres and create excitement beforehand to get subscribers engaged and ready to watch.
            `
        },
        {
            "title": "Real-time interaction",
            "description": `
               During live streams, we use live chat and polls so viewers can participate, ask questions, and interact with your brand directly.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} paddingBottom="0px" />
    );
}