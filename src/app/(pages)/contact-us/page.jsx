import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from '@/component/pages/ContactUs/Banner';
import { ContactForm } from '@/component/pages/ContactUs/ContactForm';

export const metadata = {
    title: "Contact BrandStory Global | Let's Grow Together",
    description: "Contact BrandStory Global to discuss your digital marketing, branding, SEO, PPC, web development, or ecommerce growth requirements today.",
    alternates: {
        canonical: '/contact-us',
    },
}

const page= ()=>{
    return(
        <>
            <Banner />
            <ContactForm />
        </>
    )
}

export default page;