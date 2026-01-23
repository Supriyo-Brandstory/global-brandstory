import { Banner } from "@/component/pages/AboutUs/Banner";
import { Grid } from "@/component/pages/AboutUs/Grid";
import { WhyBs } from "@/component/pages/AboutUs/WhyBs";
import { IndustriesTransformed } from "@/component/pages/AboutUs/IndustriesTransformed";
import { Labels } from "@/component/pages/AboutUs/Labels";

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