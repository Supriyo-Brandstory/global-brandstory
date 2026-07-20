import { Banner } from "@/component/pages/AboutUs/Banner";
import { Grid } from "@/component/pages/AboutUs/Grid";
import { WhyBs } from "@/component/pages/AboutUs/WhyBs";
import { IndustriesTransformed } from "@/component/pages/AboutUs/IndustriesTransformed";
import { Labels } from "@/component/pages/AboutUs/Labels";

export const metadata = {
    title: "About BrandStory Global | Digital Growth Experts",
    description: "Learn about BrandStory Global, a full-service digital marketing agency helping brands grow with SEO, PPC, branding, web development, and creative solutions.",
    alternates: {
        canonical: '/about-us',
    },
}

const page =()=>{
    return(
        <>
            <Banner />
            <Grid />
            <WhyBs />
            <IndustriesTransformed />
            <Labels />
        </>
    )
}

export default page;