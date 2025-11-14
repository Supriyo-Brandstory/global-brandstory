import { CommonBigIndex } from "../common/CommonBigIndex";

export const OurAeoServices = () => {
  const heading = "Our AEO Service Modules";
  const description = "We help your brand show up inside those AI responses by building it the right way from the start.";

  const cases = [
    {
      title: "1. AEO Audit",
      description: 
        "We begin by checking how your brand appears inside AI tools like ChatGPT, Bing Copilot, and Gemini. We test real prompts and real responses to see what the models say or don’t say about your brand." +
        "<br/><br/><b>Outcome:</b><br/> You’ll know exactly where your content appears across AI platforms, and where it’s missing. This becomes your visibility baseline."
    },
    {
      title: "2. Entity-Based Content Structuring",
      description: 
        "AI engines think in terms of entities, people, brands, services, and topics. We reorganize your content so it’s built around these entities and their relationships. This helps LLMs understand what your content is about and who it connects to." +
        "<br/><br/><b>Outcome:</b><br/> Your pages become more recognizable and meaningful to AI systems. That makes it easier for your brand to be selected as a source."
    },
    {
      title: "3. Q&A Optimization",
      description: 
        "We turn your content into clear, structured answers. We rewrite long paragraphs into direct question-answer formats because that’s how people talk to AI tools. This structure helps models scan faster and pull your answer more often." +
        "<br/><br/><b>Outcome:</b><br/> Better alignment with how users ask and how models respond. Your content becomes a match for more prompts."
    },
    {
      title: "4. Schema & Markup Implementation",
      description: 
        "We add structured data formats like FAQPage, HowTo, and Article markup. These behind-the-scenes tags make your content more readable to machines, improving both search and AI engine understanding." +
        "<br/><br/><b>Outcome:</b><br/> AI systems can better parse your content and use it in answers. Schema increases chances of being cited or excerpted."
    },
    {
      title: "5. AI Engine Distribution Strategy",
      description: 
        "It’s not enough to build great content, you need to make sure AI engines see it. We submit, test, and refine how your content is picked up across platforms like ChatGPT, Perplexity, Bing Copilot, and Gemini." +
        "<br/><br/><b>Outcome:</b><br/> You show up in more places, get quoted in more answers, and reach more users without needing clicks."
    },
  ];

  const footer = "";

  return (
    <CommonBigIndex
      data={cases}
      heading={heading}
      description={description}
      footer={footer}
    />
  );
};