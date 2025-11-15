import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const BrandstorysAi = () => {
  const title = "Brandstory’s AI SEO Toolkit";
  const description = "We use a tight, integrated toolkit to make sure your brand shows up where it counts:";

  const data = [
    {
      title: "AI Prompt Mapper",
      description: "We identify the most common prompts people use to find answers in your industry. Then we match your content to those prompts across tools like ChatGPT, Perplexity, and Gemini.",
      bgcolor: "#6d3119",
      logo: "/images/square-images/s7.png"
    },
    {
      title: "Schema Markup Generator",
      description: "This tool applies structured data (like FAQPage, Article, and HowTo) that LLMs rely on to read and reuse content properly.",
      bgcolor: "#474574",
      logo: "/images/square-images/s8.png"
    },
    {
      title: "Entity Tracker",
      description: "This tool monitors how your brand is understood across AI engines. It checks if your name, product, or service is recognized as a known entity and how it links with related topics.",
      bgcolor: "#3e484b",
      logo: "/images/square-images/s10.png"
    },
    {
      title: "LLM Visibility Dashboard",
      description: "A real-time dashboard that tracks when and where your brand shows up in AI-generated responses across platforms.",
      bgcolor: "#6d3119",
      logo: "/images/square-images/s11.png"
    },
    {
      title: "Content Gap Finder",
      description: "We scan your existing content against common industry prompts and AI answers. This tool finds what’s missing and where you need to fill the gaps.",
      bgcolor: "#474574",
      logo: "/images/square-images/s42.png"
    }
  ];

  return (
    <CommonGridBox3Scrollable 
      title={title} 
      description={description} 
      data={data} 
    />
  );
};