import CommonDivider from "@/component/pages/common/CommonDivider";
import { Banner } from "@/component/pages/Photography/Banner";
import { AboutBrandstory } from "@/component/pages/Photography/AboutBrandstory";
import { RedifiningProfessional } from "@/component/pages/Photography/RedifiningProfessional";
import { ModernPhotography } from "@/component/pages/Photography/ModernPhotography";
import { RealResults } from "@/component/pages/Photography/RealResults";
import { OurPhotographyServices } from "@/component/pages/Photography/OurPhotographyServices";
import { YourBrand } from "@/component/pages/Photography/YourBrand";
import { VoiceOfBrands } from "@/component/pages/Photography/VoiceOfBrands";
import { MasteringVisuals } from "@/component/pages/Photography/MasteringVisuals";
import { WhyPartner } from "@/component/pages/Photography/WhyPartner";
import { OurCommitment } from "@/component/pages/Photography/OurCommitment";
import { Adv } from "@/component/pages/Photography/Adv";
import CommonFAQ from "@/component/pages/common/CommonFAQ";

const page = () => {
  return (
    <>
      <Banner />
      <AboutBrandstory />
      <RedifiningProfessional />
      <ModernPhotography />
      <RealResults />
      <OurPhotographyServices />
      <YourBrand />
      <VoiceOfBrands />
      <MasteringVisuals />
      <WhyPartner />
      <OurCommitment />
      <Adv />
      <CommonFAQ
        data={[
          {
            title: "What types of photography services do you offer?",
            description:
              "We provide photography services including corporate photography, ecommerce photography, food, fashion, architectural, event, and aerial/drone photography for B2B brands worldwide.",
          },
          {
            title: "How do I book a session with BrandStory Global?",
            description:
              "You can book a consultation with our professional photographers through our website.  Contact our team directly to discuss your project requirements.",
          },
          {
            title: "What is your typical turnaround time?",
            description:
              "Turnaround depends on project scope. But most shoots are delivered within 7 to 14 business days after post production. We ensure timely delivery for all photography services.",
          },
          {
            title: "How will I receive the final images?",
            description:
              "Final images are delivered via secure online gallery or cloud storage in high resolution formats. It will be ready for digital or print use, reflecting the quality of our professional photographers.",
          },
          {
            title: "Do I own the rights to the images?",
            description:
              "Yes. Clients receive full usage rights for all final images, ensuring complete ownership and flexibility when using our photography services.",
          },
          {
            title: "Can I request RAW files from my session?",
            description:
              "RAW files can be provided upon request. It depends on project type and licensing agreements handled by our professional photographers.",
          },
          {
            title: "Do you offer post production or advanced editing services?",
            description:
              "Yes. Our team provides professional retouching, color correction, and creative editing to ensure high quality results across all photography services.",
          },
        ]}
      />
    </>
  );
};

export default page;
