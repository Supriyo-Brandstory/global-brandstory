import CommonDivider from '@/component/pages/common/CommonDivider'
import { Banner } from '@/component/pages/Photography/Banner'
import { AboutBrandstory } from '@/component/pages/Photography/AboutBrandstory'
import { RedifiningProfessional } from '@/component/pages/Photography/RedifiningProfessional'
import { ModernPhotography } from '@/component/pages/Photography/ModernPhotography'
import { RealResults } from '@/component/pages/Photography/RealResults'
import { OurPhotographyServices } from '@/component/pages/Photography/OurPhotographyServices'
import { YourBrand } from '@/component/pages/Photography/YourBrand'
import { VoiceOfBrands } from '@/component/pages/Photography/VoiceOfBrands'
import { MasteringVisuals } from '@/component/pages/Photography/MasteringVisuals'
import { WhyPartner } from '@/component/pages/Photography/WhyPartner'
import { OurCommitment } from '@/component/pages/Photography/OurCommitment'
import { Adv } from '@/component/pages/Photography/Adv'

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
    </>
  )
}

export default page