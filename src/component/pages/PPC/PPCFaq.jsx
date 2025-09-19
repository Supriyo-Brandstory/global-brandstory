import FAQs from '@/component/pages/common/CommonFAQ'
export const PPCFaq = () =>{
      const data = [
  {
    title: "How Long Do SEO Services Take To Show Results?",
    description: "The timeline for seeing SEO results varies, but you can typically expect to see initial improvements within 4-6 months, with significant results often appearing after 6-12 months. This depends on factors like your website's current state, competition, and the keywords you're targeting."
  },
  {
    title: "What Do Your SEO Services Include?",
    description: "Our SEO services are comprehensive and include a range of strategies. This typically involves on-page optimization (keyword research, content optimization), off-page optimization (link building, outreach), technical SEO (site speed, mobile-friendliness), and regular performance reporting."
  },
  {
    title: "Will I Have A Dedicated SEO Specialist Managing My Account?",
    description: "Yes, you will be assigned a dedicated SEO specialist. This person will be your main point of contact, responsible for developing and executing your strategy, providing updates, and answering any questions you may have."
  },
  {
    title: "Do SEO Services Replace Paid Advertising?",
    description: "No, SEO and paid advertising (like Google Ads) are complementary. SEO focuses on earning organic traffic over the long term, while paid advertising provides immediate, short-term visibility. A combined strategy often yields the best results."
  },
  {
    title: "Are Your SEO Services Compliant With Google Guidelines?",
    description: "Absolutely. We adhere strictly to Google's Webmaster Guidelines and other search engine best practices. Our methods are white-hat and focus on sustainable, long-term growth for your website, avoiding any deceptive or risky tactics."
  },
  {
    title: "Can Your SEO Services Support Multi-Language Or Global Websites?",
    description: "Yes, we have experience with international SEO strategies. We can help you with hreflang tags, geo-targeting, and content localization to ensure your website is properly optimized for different languages and regions around the world."
  },
  {
    title: "Will Blogging Help My SEO Strategy?",
    description: "Yes, blogging is a crucial component of a strong SEO strategy. It allows you to create fresh, keyword-rich content, attract a wider audience, and build authority in your niche, which are all key factors in improving your search engine rankings."
  }
];


return (
    <FAQs data={data}/>
)
}