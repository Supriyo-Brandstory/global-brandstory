import CommonStatsSection from '../common/CommonStats';

export const WhatAnswer = () => {
  return (
    <CommonStatsSection
      title="What Answer Engine Optimization<br/>Means for Your Brand"
      subtitle=""
      description={[
        "Answer Engine Optimization (AEO) is the process of shaping your content so it gets picked as the answer by tools like ChatGPT, Gemini, and Perplexity AI. These engines don’t rank results like Google. They answer queries with what they believe is the most accurate and structured response.",
        "<br/><b>AEO vs SEO, Quick Breakdown:</b>",
        "<ul style='margin: 16px 0; padding-left: 20px;'>",
        "<li>SEO targets clicks; AEO targets visibility</li>",
        "<li>SEO ranks pages; AEO ranks answers</li>",
        "<li>SEO uses keywords; AEO uses structured data and entities</li>",
        "<li>SEO works in links; AEO works in direct answers</li>",
        "</ul>",
        "Both are essential. But in 2025 and beyond, AEO is what makes sure your brand appears without needing a click."
      ]}
      stats={[
        {
          value: "3x",
          label: "<b>Increase in voice-based AI featured answers</b>"
        },
        {
          value: "100%",
          label: "<b>Optimized pages indexed with FAQ, HowTo, or Article schema</b>"
        },
        {
          value: "25+",
          label: "<b>AI citations per major client within 2 months</b>"
        }
      ]}
    />
  );
};