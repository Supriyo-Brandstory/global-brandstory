import {Banner} from "@/component/pages/Blogs/Banner";
import {Blogs} from "@/component/pages/Blogs/Blogs";
import {ExploreMore} from "@/component/pages/Blogs/ExploreMore";

const page = async ({ searchParams }) => {
    return(
        <>
            <Banner />
            <Blogs searchParams={searchParams} />
            <ExploreMore />
        </>
    )
}

export default page;