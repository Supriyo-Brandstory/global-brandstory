import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const Our5Step = () => {
  const accordionData = [
    {
      title: "1. AEO Audit",
      content: 
        "We begin with a full audit of your current presence across AI platforms like ChatGPT, Bing Copilot, Perplexity, and Gemini. This includes checking prompt-based responses, identifying if your brand is mentioned, and reviewing how your content appears (or doesn't) in AI-generated answers." +
        "<br/><br/><strong>Goal:</strong> Understand your current AI visibility. Identify what’s showing up, what’s missing, and what content needs attention."
    },
    {
      title: "2. Content Restructuring",
      content: 
        "Next, we optimize the format of your most important pages. We break down long content into clear, direct question-answer blocks. We rewrite key sections to align with how users ask questions in natural language and how AI prefers structured responses." +
        "<br/><br/><strong>Goal:</strong> Make your content easier for AI engines to understand, select, and serve as an answer."
    },
    {
      title: "3. Schema Application",
      content: 
        "We implement the right schema markup across your site to signal content types clearly to AI systems. This includes adding formats like FAQPage, Article, and HowTo, as well as enhancing metadata to support entity recognition and topic mapping." +
        "<br/><br/><strong>Goal:</strong> Help AI platforms understand the purpose and structure of your content for better interpretation and citation."
    },
    {
      title: "4. AI Engine Submission",
      content: 
        "Once your content is optimized and structured, we submit it across AI ecosystems. This includes search API submissions, prompt testing, and surfacing your content to indexers used by engines like Bing and Gemini. We also run test prompts to confirm inclusion and discoverability." +
        "<br/><br/><strong>Goal:</strong> Get your newly structured content seen, processed, and considered by leading AI engines."
    },
    {
      title: "5. Results Monitoring",
      content: 
        "We continuously monitor how your content performs across prompts and engines. This includes tracking AI mentions, citation frequency, zero-click engagement shifts, and prompt success rate. When needed, we adjust the content to maintain or boost performance." +
        "<br/><br/><strong>Goal:</strong> Keep your brand present and perform across AI tools with regular updates and visibility checks."
    }
  ];

  return (
    <CommonAccordion2
      title="Our 5-Step AEO Optimization Process"
      description="We follow a clear, focused process to make your brand visible inside AI answers. Every step is designed to align your content with how modern AI tools read, evaluate, and recommend."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};