import CommonDivider from "@/component/pages/common/CommonDivider";
import { Banner } from "@/component/pages/ShopifyWebDevelopment/Banner";
import { TheImportance } from "@/component/pages/ShopifyWebDevelopment/TheImportance";
import { OurShopify } from "@/component/pages/ShopifyWebDevelopment/OurShopify";
import { OurDevelopment } from "@/component/pages/ShopifyWebDevelopment/OurDevelopment";
import { WhatMakes } from "@/component/pages/ShopifyWebDevelopment/WhatMakes";
import { OurTested } from "@/component/pages/ShopifyWebDevelopment/OurTested";
import { MeetTheExperts } from "@/component/pages/ShopifyWebDevelopment/MeetTheExperts";
import { HowStartups } from "@/component/pages/ShopifyWebDevelopment/HowStartups";
import { ClientStories } from "@/component/pages/ShopifyWebDevelopment/ClientStories";
import { Faq } from "@/component/pages/ShopifyWebDevelopment/Faq";
import { Adv } from "@/component/pages/ShopifyWebDevelopment/Adv";
import CommonAccordion from "@/component/pages/common/CommonAccordion";

const page = () => {
  return (
    <>
      <Banner />
      <CommonDivider />
      <TheImportance />
      <CommonDivider />
      <OurShopify />
      <CommonDivider />
      <OurDevelopment />
      <CommonDivider />
      <WhatMakes />
      <CommonDivider />
      <OurTested />
      <CommonDivider />
      <MeetTheExperts />
      <CommonDivider />
      <CommonDivider />
      <CommonAccordion
        title="Technology We Use to Keep Shopify Stores Secure and Scalable"
        subheding2="We build with the best of Shopify’s ecosystem and beyond:"
        items={[
          {
            title: "1. Shopify Basic, Advanced, and Plus",
            content:
              "From startups to enterprise brands, we work across all Shopify plans to deliver solutions tailored to your business scale and growth stage.",
          },
          {
            title: "2. Custom-Coded Shopify Themes",
            content:
              "We design and develop themes from scratch using Shopify Liquid, giving you speed, originality, and complete flexibility.",
          },
          {
            title: "3. Shopify App Integrations",
            content:
              "Whether it’s marketing automation, analytics, or back-office systems, we seamlessly integrate the right apps to extend your store’s capabilities and simplify workflows.",
          },
          {
            title: "4. Headless Commerce Frameworks",
            content:
              "For lightning-fast performance and design freedom, we build headless solutions that decouple front-end and back-end using modern frameworks like React or Vue.js",
          },
          {
            title: "5. User-Friendly CMS Solutions",
            content:
              "Our setups make product and content management simple, empowering non-technical teams to update and scale the store without friction.",
          },
        ]}
        footer=""
      />
      <HowStartups />

      <CommonDivider />
      <ClientStories />
      <CommonDivider />
      <Faq />
      <CommonDivider />
      <Adv />
    </>
  );
};

export default page;
