import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const HowWeBuild = () => {
  const accordionData = [
    {
      title: "1. Track Mentions Across AI Tools",
      content:
        "We monitor how often your brand appears in ChatGPT, Gemini, Bing Copilot, and Perplexity results—whether cited directly or paraphrased—so you know exactly where you stand in the AI landscape."
    },
    {
      title: "2. Test and Benchmark Prompts",
      content:
        "We run controlled prompts based on the questions your audience is most likely to ask, then benchmark your brand’s visibility against competitors to measure progress over time."
    },
    {
      title: "3. Analyze Zero-Click Impact",
      content:
        "We measure engagement shifts where AI tools provide answers without clicks, giving you a true picture of visibility beyond traditional rankings."
    },
    {
      title: "4. Deliver LLM Visibility Dashboards",
      content:
        "We provide dashboards that connect prompts to answers and sources, making it easy to see when, where, and how your brand is being surfaced."
    },
    {
      title: "5. Keep Content Fresh and Aligned",
      content:
        "We refresh high-performing content, repair broken links, update sources, and reformat content to match evolving AI models—keeping your presence consistent."
    },
    {
      title: "6. Future-Proof Your Strategy",
      content:
        "We design content frameworks that are model-aware, resilient, and prompt-ready, ensuring your brand visibility compounds over time as AI search continues to evolve."
    },
  ];

  return (
    <CommonAccordion
      title="How We Build and Maintain AI Search Visibility"
      subheding2=""
      items={accordionData}
      footer=""
    />
  );
};