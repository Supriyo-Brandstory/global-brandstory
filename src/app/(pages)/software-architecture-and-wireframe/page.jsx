import CommonDivider from "@/component/pages/common/CommonDivider";
import { Banner } from "@/component/pages/SoftwareArchitectureAndWireframe/Banner";
import { HowSoftwareArchitecture } from "@/component/pages/SoftwareArchitectureAndWireframe/HowSoftwareArchitecture";
import { AdvancedSoftwareSolutions } from "@/component/pages/SoftwareArchitectureAndWireframe/AdvancedSoftwareSolutions";
import { OurMethod } from "@/component/pages/SoftwareArchitectureAndWireframe/OurMethod";
import { TheDiffrence } from "@/component/pages/SoftwareArchitectureAndWireframe/TheDiffrence";
import { ActionableStrategies } from "@/component/pages/SoftwareArchitectureAndWireframe/ActionableStrategies";
import { ExpertBehind } from "@/component/pages/SoftwareArchitectureAndWireframe/ExpertBehind";
import { OurExpertise } from "@/component/pages/SoftwareArchitectureAndWireframe/OurExpertise";
import { ClientStories } from "@/component/pages/SoftwareArchitectureAndWireframe/ClientStories";
import { Faq } from "@/component/pages/SoftwareArchitectureAndWireframe/Faq";
import { Adv } from "@/component/pages/SoftwareArchitectureAndWireframe/Adv";
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("software-architecture-and-wireframe");

const page = () => {
  return (
    <>
      <Banner />
      <CommonDivider />
      <HowSoftwareArchitecture />
      <CommonDivider />
      <AdvancedSoftwareSolutions />
      <CommonDivider />
      <OurMethod />
      <CommonDivider />
      <TheDiffrence />
      <CommonDivider />
      <ActionableStrategies />
      <CommonDivider />
      <ExpertBehind />
      <CommonDivider />
      <OurExpertise />
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
