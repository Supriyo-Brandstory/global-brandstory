import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const PaidGuest = () => {
     const accordionData = [
    {
      title: "1. We Publish Only On Real Blogs With Real Audiences",
      content:
        `We don’t touch link farms or Private Blog Networks. Every site we work with is a legitimate, independently run blog with real traffic and consistent content. These are websites with readers who care not just sites built to sell backlinks. When your content is placed there, it adds true value and authority to your brand.
        `,
    },
    {
      title: "2. Manually Vetted, Metrics-Backed Websites",
      content:
        `Each site we partner with is carefully screened for performance, safety, and industry relevance. We check: Domain Authority (DA) of 40 or higher, at least 1,000 organic visitors per month, spam score under 10 and niche relevance aligned with your business. We never automate this process. It’s hands-on, every time, so you know exactly where your brand is being featured.`, 
    },
    {
      title: "3. Full-Service Content Creation By Our Team",
      content:
        `You don’t need to write a single word. Our writers and editors create every article from scratch, tailored to the blog’s tone and your business goals. We research topics, write original content, include contextual links, and align everything with the blog’s guidelines.`, 
    },
    {
      title: "4. Outreach And Placement Done The Right Way",
      content:
        `We handle all outreach directly with blog editors and publishers. Every placement comes from personalized communication, not bulk emails or bots. Once the post is live, we verify it, track its indexation, and share a full report with you.`, 
    },
    {
      title: "5. Over 100 Brands Have Partnered With Us",
      content:
        `From growing startups to established names, our service has helped brands build real online authority. We’ve earned recognition from platforms like SEMrush and Clutch, not just for performance but for our commitment to transparency and results.`, 
    },
  ];
  return (
        <CommonAccordion
        title="Why Choose Our Paid Guest Posting Services"
            subheding2="A Backlink Only Works When It Earns Trust, From Search Engines And Your Audience. Our Guest Posting Service Is Built To Do Exactly That. We Focus On Quality Over Volume, Real Websites Over Shortcuts, And Strong Editorial Standards Over Spammy Placements."
            items={accordionData} 
            footer="" 
            />
    )
}