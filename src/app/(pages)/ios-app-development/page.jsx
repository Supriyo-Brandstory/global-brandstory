import CommonDivider from "@/component/pages/common/CommonDivider";
import { Banner } from "@/component/pages/IosAppDevelopment/Banner";
import { WhyIos } from "@/component/pages/IosAppDevelopment/WhyIos";
import { IosAppDev } from "@/component/pages/IosAppDevelopment/IosAppDev";
import { KeyAdvantages } from "@/component/pages/IosAppDevelopment/KeyAdvantages";
import { ProvenStrategies } from "@/component/pages/IosAppDevelopment/ProvenStrategies";
import { TexhnicalSpecialist } from "@/component/pages/IosAppDevelopment/TexhnicalSpecialist";
import { Tools } from "@/component/pages/IosAppDevelopment/Tools";
import { IndustriesBenifiting } from "@/component/pages/IosAppDevelopment/IndustriesBenifiting";
import { ClientStories } from "@/component/pages/IosAppDevelopment/ClientStories";
import { Faqs } from "@/component/pages/IosAppDevelopment/Faqs";
import { Adv } from "@/component/pages/IosAppDevelopment/Adv";
import CommonAccordion2 from "@/component/pages/common/CommonAccordion2";

const page = () => {
  return (
    <>
      <Banner />
      <CommonDivider />
      <WhyIos />
      <CommonDivider />
      <IosAppDev />
      <CommonDivider />
      <CommonAccordion2
        title="How We Plan, Design, and Build Android Apps With Precision and Quality"
        description="We follow a structured approach that ensures clarity, collaboration, and measurable results."
        items={[
          {
            title: "Phase I: Strategic Discovery & Ideation",
            content:
              "We start by gaining a deep understanding of your business, audience, and challenges. Through market research and competitor analysis, we define a clear product vision. By the end of this phase, you’ll have a detailed feature roadmap and a strategy designed for measurable success.",
          },
          {
            title: "Phase II: Advanced UX/UI Design & Prototyping",
            content:
              "Our designers focus on creating user-centric interfaces that adhere to Android UX/UI best practices. Using Jetpack Compose, we build interactive prototypes to validate user flows, ensuring your app delivers an intuitive and engaging experience before development begins.",
          },
          {
            title: "Phase III: High-Performance Native Development",
            content:
              "Our developers leverage Kotlin and modular architecture (MVVM) to build secure, scalable apps. Emphasizing clean code, smooth performance, and maintainability, we create solutions that support continuous updates, feature expansions, and long-term growth.",
          },
          {
            title: "Phase IV: Post-Launch Optimization & Governance",
            content:
              "Launching your app is just the beginning. We provide ongoing performance monitoring, maintenance, and app store optimization (ASO) to maximize visibility. Our governance framework ensures your app evolves with changing business goals and user needs.",
          },
        ]}
        splitRatio={0.5}
        footer=""
      />
      <CommonDivider />
      <KeyAdvantages />
      <CommonDivider />
      <ProvenStrategies />
      <CommonDivider />
      <TexhnicalSpecialist />
      <CommonDivider />
      <Tools />
      <CommonDivider />
      <IndustriesBenifiting />
      <CommonDivider />
      <ClientStories />
      <CommonDivider />
      <Faqs />
      <CommonDivider />
      <Adv />
    </>
  );
};

export default page;
