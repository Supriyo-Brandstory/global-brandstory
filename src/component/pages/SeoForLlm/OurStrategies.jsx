import React from 'react';
import CommonTwoCard from '../common/CommonTwoCard';

export const OurStrategies = () => {
  const data = {
    heading: "Our Strategies to Build AI-Ready Visibility",
    subheading: "",
    cards: [
      {
        title: "Make Your Brand a Known Entity",
        description:
          "We position your brand as an entity AI tools can easily identify. That includes building strong internal linking structures, crafting About pages that clearly define who you are, securing mentions on credible platforms, and implementing schema to label your business accurately." +
          "The result: AI systems consistently recognize and surface your brand."
      },
      {
        title: "Optimize Across AI Engines",
        description:
          "It’s not just about Google anymore. We optimize your content for ChatGPT, Gemini, Bing Copilot, and Perplexity—each with their own ranking logic." +
          "From aligning with OpenAI’s training history to fine-tuning for Google’s structured data parsing, we make sure your brand shows up wherever your audience is asking."
      },
      {
        title: "Design Content for Prompts",
        description:
          "We create content that mirrors how people interact with AI: through natural prompts and questions." +
          "Our pages are structured to deliver clear answers first, followed by supporting insights and TL;DR summaries that AI models can easily pull into responses." +
          "This ensures your content is the one AI chooses to showcase."
      },
      {
        title: "Write to Train the Model",
        description:
          "We don’t just optimize for search results—we shape how AI learns." +
          "By producing factual, original, and structured content with Q&A blocks, bylines, and timestamps, we train models to treat your site as a reliable source." +
          "That way, when users ask, AI tools are more likely to reference your brand directly."
      },
    ],
  };

  return <CommonTwoCard {...data} />;
};