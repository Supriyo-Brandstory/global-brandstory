import {Banner} from "@/component/pages/Careers/Banner";
import { Contact } from "@/component/pages/Careers/Contact";
import { Openings } from "@/component/pages/Careers/Openings";
import { Work } from "@/component/pages/Careers/Work";

export const metadata = {
    title: "Careers at BrandStory Global | Join Our Team",
    description: "Build your career with BrandStory Global. Explore exciting opportunities in digital marketing, design, development, content, and client success.",
    alternates: {
        canonical: '/careers',
    },
}

const page =()=>{
    return(
        <>
            <Banner />
            <Work />
            <Openings />
            <Contact />
        </>
    )
}

export default page;