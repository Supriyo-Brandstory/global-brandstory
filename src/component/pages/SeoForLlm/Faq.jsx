import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
  const data = [
    {
      title: "What is LLM SEO and how is it different from traditional SEO?",
      description: "LLM SEO means optimizing your content for tools like ChatGPT, Gemini, and Bing Copilot, not just Google. Instead of ranking on a list of links, your goal is to be the answer inside AI responses. It’s not about being found. It’s about being quoted."
    },
    {
      title: "How does BrandStory help with SEO for LLMs?",
      description: "We structure your content to match real-world prompts, improve its readability for AI engines, and organize it in ways that increase your chances of being selected. From schema to structure to prompt testing, we do the full lift."
    },
    {
      title: "Which AI platforms do you optimize for?",
      description: "We support full optimization for:<br /><br />" +
        "• ChatGPT (OpenAI)<br />" +
        "• Bing Copilot (Microsoft)<br />" +
        "• Gemini (Google)<br />" +
        "• Perplexity AI<br />" +
        "• Claude (Anthropic)<br /><br />" +
        "And we adapt as new platforms emerge."
    },
    {
      title: "Do I need to change all my content?",
      description: "No. We start with your most strategic or high-traffic pages. Then we expand outward based on what AI platforms are favoring or ignoring."
    },
    {
      title: "How fast will I see results in ChatGPT or Gemini?",
      description: "Early visibility usually shows in 4 to 6 weeks through prompt testing and citations. Broader model inclusion, indexing, and brand recognition typically build over 8 to 12 weeks."
    },
    {
      title: "Can you measure how often I appear in AI answers?",
      description: "Yes. We run controlled prompt tests, use AI tracking dashboards, and conduct manual audits. We’ll show you where your brand is being quoted and how often."
    },
  ];

  return <FAQs data={data} />;
};