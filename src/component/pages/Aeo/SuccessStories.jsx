import { CommonBwCrd } from "../common/CommonBwCard";

export const SuccessStories = () => {
  const title = "Success Stories: From Keywords to Answers";
  const description = "";
  const footer = "";

  const data = [
    {
      title: "SaaS Platform | India",
      description: `
        <b>Challenge:</b> No AI mentions despite strong SEO<br/><br/>
        <b>Strategy:</b> <br/>Structured 10 top pages with TL;DRs and schema<br/><br/>
        <b>Result:</b><br/> +120 ChatGPT mentions in 6 weeks<br/><br/>
        <b>Testimonial:</b><br/>"We became the source users see in AI answers. That’s real influence."
      `
    },
    {
      title: "Health Brand | UK",
      description: `
        <b>Challenge:</b><br/> Low voice visibility<br/><br/>
        <b>Strategy:</b> <br/>Rebuilt site content around voice prompts + schema<br/><br/>
        <b>Result:</b> <br/>3x increase in voice-based featured answers on Bing AI<br/><br/>
        <b>Testimonial:</b><br/>"We became the source users see in AI answers. That’s real influence."
      `
    }
  ];

  return (
    <CommonBwCrd
      rightPadding="50px"
      title={title}
      description={description}
      footer={footer}
      cardData={data}
      paddingBottom="0px"
    />
  );
};