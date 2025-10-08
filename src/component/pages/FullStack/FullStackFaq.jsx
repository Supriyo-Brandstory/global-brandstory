import FAQs from '@/component/pages/common/CommonFAQ'
export const FullStackFaq = () =>{
      const data = [
  {
    title: "Can you customize tech stacks for niche requirements?",
    description: "The timeline for seeing SEO results varies, but you can typically expect to see initial improvements within 4-6 months, with significant results often appearing after 6-12 months. This depends on factors like your website's current state, competition, and the keywords you're targeting."
  },
  {
    title: "Do you work with startups and enterprises alike?",
    description: "Our SEO services are comprehensive and include a range of strategies. This typically involves on-page optimization (keyword research, content optimization), off-page optimization (link building, outreach), technical SEO (site speed, mobile-friendliness), and regular performance reporting."
  },
  {
    title: "Will I get a dedicated team or developer?",
    description: "Yes, you will be assigned a dedicated SEO specialist. This person will be your main point of contact, responsible for developing and executing your strategy, providing updates, and answering any questions you may have."
  },
  {
    title: "What does your post-launch support include?",
    description: "No, SEO and paid advertising (like Google Ads) are complementary. SEO focuses on earning organic traffic over the long term, while paid advertising provides immediate, short-term visibility. A combined strategy often yields the best results."
  },
  {
    title: "How fast can you begin development?",
    description: "No, SEO and paid advertising (like Google Ads) are complementary. SEO focuses on earning organic traffic over the long term, while paid advertising provides immediate, short-term visibility. A combined strategy often yields the best results."
  }
];


return (
    <FAQs data={data}/>
)
}