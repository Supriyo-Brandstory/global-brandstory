import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const HowWeFutureProof = () => {
  const accordionData = [
    {
      title: "1. Adaptive Content Structuring",
      content:
        "We write and organize content in a way that makes it easy to update. By using clear Q&A blocks, smart use of tags, and reusable formats, your site stays ready for future shifts in how AI reads and selects answers." +
        "<br/><br/><b>What this means:</b><br/> Your content doesn’t break when models update. It stays useful, readable, and AI-ready without needing a full rewrite every few months."
    },
    {
      title: "2. Multi-Engine Optimization",
      content:
        "We don’t limit your visibility to one platform. AI users are everywhere and we make sure your brand shows up in all the major tools they trust:" +
        "<br/><br/>" +
        "<ul style='margin: 12px 0; padding-left: 20px;'>" +
          "<li>ChatGPT</li>" +
          "<li>Perplexity AI</li>" +
          "<li>Bing Copilot</li>" +
          "<li>Google Gemini</li>" +
        "</ul>" +
        "<br/><b>What this means:</b><br/> Your answers show up across tools, not just on one search engine."
    },
    {
      title: "3. LLM-Centric Content Governance",
      content:
        "We keep your content in check over time. Our team tracks how your brand appears across AI tools and what’s performing well, and we update what’s not. We watch for:" +
        "<br/><br/>" +
        "<ul style='margin: 12px 0; padding-left: 20px;'>" +
          "<li>AI citations and mentions</li>" +
          "<li>Prompt test results</li>" +
          "<li>Schema and markup accuracy</li>" +
          "<li>Content freshness and source clarity</li>" +
        "</ul>" +
        "<br/><b>What this means:</b><br/> Your site doesn’t just stay online, it stays in the answers."
    }
  ];

  return (
    <CommonAccordion
      title="How We Future-Proof Your Brand<br/>for AI Search"
      subheding2="AI tools evolve fast. What works today may not work next quarter. That’s why we don’t treat AEO as a one-time fix. We build your content system to move and grow with the way AI models change."
      items={accordionData}
      footer=""
    />
  );
};