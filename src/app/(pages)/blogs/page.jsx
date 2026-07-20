import {Banner} from "@/component/pages/Blogs/Banner";
import {Blogs} from "@/component/pages/Blogs/Blogs";
import {ExploreMore} from "@/component/pages/Blogs/ExploreMore";

export const metadata = {
    title: "Digital Marketing Blogs | BrandStory Global",
    description: "Explore digital marketing blogs covering SEO, PPC, social media, branding, web development, ecommerce, and business growth strategies.",
    alternates: {
        canonical: '/blogs',
    },
}

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