import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from '@/component/pages/OurClients/Banner';
import { Clients } from '@/component/pages/OurClients/Clients';

export const metadata = {
    title: "Our Clients | Trusted Brands | BrandStory Global",
    description: "Discover the brands that trust BrandStory Global for digital marketing, branding, web development, creative services, and business growth.",
    alternates: {
        canonical: '/our-clients',
    },
}

const page= ()=>{
    return(
        <>
            <Banner />
            <Clients />
        </>
    )
}

export default page;