import {Banner} from "@/component/pages/Careers/Banner";
import { Contact } from "@/component/pages/Careers/Contact";
import { Openings } from "@/component/pages/Careers/Openings";
import { Work } from "@/component/pages/Careers/Work";

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