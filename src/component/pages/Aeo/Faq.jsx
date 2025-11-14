import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
  const data = [
    {
      title: "What is AEO in digital marketing?",
      description: "AEO (Answer Engine Optimization) is about optimizing your content so AI tools like ChatGPT, Bing Copilot, and Google Gemini can pull direct answers from your website. It helps your brand appear as a reliable source in AI-driven search and voice search results."
    },
    {
      title: "Is AEO replacing SEO?",
      description: "No, AEO is not replacing SEO. SEO focuses on traditional search engine rankings, while AEO focuses on appearing in AI-generated answers. Together, they work well: SEO brings clicks, and AEO brings visibility in AI responses. Using both makes your brand easier to find in all search formats."
    },
    {
      title: "How do I optimize for ChatGPT or Bing Copilot?",
      description: "To optimize for AI tools, create content that directly answers questions in a clear, conversational way. Use structured formats like FAQs, HowTo guides, and headings. Include facts, links, and context to show authority. Make your content easy to read and match how people naturally ask questions."
    },
    {
      title: "Do I need structured data for AEO?",
      description: "Yes, structured data helps a lot. Using schema like FAQPage, HowTo, or Article tells AI engines what your content is about. It’s not required, but it increases your chances of being used as a trusted source. This is especially useful for instructional or detailed content."
    },
    {
      title: "What content types work best for AEO?",
      description: "FAQ pages, step-by-step guides, glossaries, product comparisons, and TL;DR summaries work best. These formats are easy for AI tools to read and pull answers from. Clear, structured content helps your brand show up in AI responses."
    },
    {
      title: "How soon do I see results from AEO?",
      description: "You may see early AI mentions or citations in 4–6 weeks after optimizing content. Full results, like increased visibility and zero-click traffic, usually take 8–12 weeks. The timeline depends on your content size and authority."
    },
    {
      title: "Can I track my mentions on AI engines?",
      description: "Yes, you can track mentions, though the tools are still evolving. You can test prompts on ChatGPT or Perplexity, use AI SEO tools like AlsoAsked or Frase, and check traffic patterns in GA4. Some companies also use dashboards to monitor AI visibility and performance."
    }
  ];

  return <FAQs data={data} />;
};