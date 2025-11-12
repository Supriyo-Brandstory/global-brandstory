import FAQs from '@/component/pages/common/CommonFAQ';

export const LbFaq = () => {
  const data = [
    {
      title: "What is link building, and why is it important for SEO?",
      description: "Link building is the process of getting other websites to link back to yours. These links help search engines see your site as trustworthy, which can improve your rankings and bring in more visitors through search."
    },
    {
      title: "How do you find link opportunities?",
      description: "We combine careful research, proven SEO tools, and our network of trusted sites. Every opportunity is handpicked based on relevance, quality, and real traffic."
    },
    {
      title: "Will these links improve my DA and rankings?",
      description: "Yes. We focus on building links that are relevant to your niche and placed naturally within strong content. That’s what Google values and it’s what moves the needle."
    },
    {
      title: "Can I approve sites before outreach?",
      description: "Of course. Before we start any outreach, we send you a list of potential websites. You can approve or decline any of them, it’s your brand, and you stay in control."
    },
    {
      title: "What makes your link building service different?",
      description: "We don’t use shortcuts. No automation. No spam. No private blog networks (PBNs). Everything is manual, human-led, and based on helpful content that earns links the right way."
    },
    {
      title: "Are these links permanent?",
      description: "Most of the time, yes. And if a link does get taken down later, we’ll either replace it or suggest the next best option."
    },
    {
      title: "Do you guarantee a certain number of backlinks each month?",
      description: "Yes. Depending on the package you choose, you’ll receive a set number of quality backlinks every month. No surprises."
    },
    {
      title: "Will you replace links that are removed or broken?",
      description: "We track every link we build. If something changes, like a page going offline, we’ll find out quickly and either recover or replace the link."
    }
  ];

  return <FAQs data={data} />;
};