import CommonDivider from "@/component/pages/common/CommonDivider";
import { Banner } from "@/component/pages/Consulting/Banner";
import { StrategicConsulting } from "@/component/pages/Consulting/StrategicConsulting";
import { WhyTrust } from "@/component/pages/Consulting/WhyTrust";
import { TypesOfConsulting } from "@/component/pages/Consulting/TypesOfConsulting";
import { RightServices } from "@/component/pages/Consulting/RightServices";
import { IndustrySpecefic } from "@/component/pages/Consulting/IndustrySpecefic";
import { ClientSuccess } from "@/component/pages/Consulting/ClientSuccess";
import { Faq } from "@/component/pages/Consulting/Faq";
import { Adv } from "@/component/pages/Consulting/Adv";
import CommonArrowGrid from "@/component/pages/common/CommonArrowGrid";
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("consulting");

const page = () => {
  return (
    <>
      <Banner />
      <StrategicConsulting />
      <WhyTrust />
      <TypesOfConsulting />
      <RightServices />
      <IndustrySpecefic />
      <ClientSuccess />
      <Faq />
      <CommonArrowGrid
        heading="Comprehensive Consulting Services We Offer"
        descripton="We provide expert consulting services to help businesses navigate digital transformation, strengthen security, and make data-driven decisions. Our services include:"
        boxes={[
          {
            title: "Digital Transformation Services",
            description:
              "CGuiding organizations to adopt modern technologies and frameworks that streamline operations, improve efficiency, and drive innovation.",
            theme: "light",
            size: "sm",
          },
          {
            title: "IT Consulting Services",
            description:
              "Offering strategic IT guidance to align technology with business objectives, optimize infrastructure, and support long-term growth.",
            theme: "dark",
            size: "md",
          },
          {
            title: "Cybersecurity Services",
            description:
              "Ensuring data protection and business continuity with tailored security strategies, compliance support, and proactive threat management.",
            theme: "dark",
            size: "sm",
          },
          {
            title: "Data Analytics Services",
            description:
              "Turning raw data into actionable insights through advanced analytics, enabling smarter decisions and measurable business outcomes.",
            theme: "dark",
            size: "md",
          },
        ]}
      />
      <Adv />
    </>
  );
};

export default page;
