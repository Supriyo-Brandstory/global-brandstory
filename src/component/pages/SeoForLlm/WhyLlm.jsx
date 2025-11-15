import CommonStatsSection from '../common/CommonStats';

export const WhyLlm = () => {
  return (
    <CommonStatsSection
      title="Why LLM SEO Matters"
      description={[
        "Many people now use AI tools for quick, reliable answers instead of traditional search results. LLM SEO ensures your brand appears in these AI-powered responses.",
        "<b>Stat:</b> Over 40% of users now get answers directly from AI instead of clicking search results.",
        "<h3 class='highlited-text'>What Happens If You Ignore It</h3>",
        // "<ul>",
        "<ul><li><strong>Visibility:</strong> If your content isn’t chosen by AI, people won’t see your brand.</li></ul>",
        "<ul><li><strong>Brand Mentions:</strong> AI will mention competitors instead, reducing awareness and credibility.</li></ul>",
        "<ul><li><strong>Leads:</strong> Potential customers won’t find you, even if your solution is the best.</li></ul>",
        "<ul><li><strong>Trust Over Time:</strong> AI remembers patterns. Missing out now makes it harder to appear later.</li></ul>",
        // "</ul>",
        "<p class='highlited-text'>Ignoring LLM SEO means losing visibility, leads, and authority. The key question is: will AI show your brand, or someone else’s?</p>",
      ]}
      stats={[
        { value: "+500", label: "AI prompts mapped and optimized" },
        { value: "+1,200", label: "LLM citations tracked across ChatGPT, Gemini, Bing Copilot, and Perplexity" },
        { value: "+3x", label: "increase in zero-click visibility for priority pages" },
      ]}
    />
  );
};