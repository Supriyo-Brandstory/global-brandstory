import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from '@/component/pages/RealEstate/Banner';
import { Objectives } from '@/component/pages/RealEstate/Objectives';
import { KeyChallenges } from '@/component/pages/RealEstate/KeyChallenges';
import { OurGrowth } from '@/component/pages/RealEstate/OurGrowth';
import { DigitalMarketing } from '@/component/pages/RealEstate/DigitalMarketing';
import { Growth } from '@/component/pages/RealEstate/Growth';
import { Results } from '@/component/pages/RealEstate/Results';
import { Faq } from '@/component/pages/RealEstate/Faq';
import { Adv } from '@/component/pages/RealEstate/Adv';

export const metadata = {
    title: "Industries We Serve | BrandStory Global",
    description: "Explore industry-specific digital marketing solutions designed for healthcare, ecommerce, SaaS, manufacturing, finance, retail, and more.",
    alternates: {
        canonical: '/industries',
    },
}

const page = () => {
    return (
        <>
            <Banner /><CommonDivider />
            <Objectives /><CommonDivider />
            <KeyChallenges />
            <OurGrowth /><CommonDivider />
            <DigitalMarketing /><CommonDivider />
            <Growth /><CommonDivider />
            <Results /><CommonDivider />
            <Faq /><CommonDivider />
            <Adv /><CommonDivider />
        </>
    )
}

export default page;