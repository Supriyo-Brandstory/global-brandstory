import { Banner } from "@/component/pages/PrivacyPolicy/Banner";
import { Terms } from "@/component/pages/PrivacyPolicy/Terms";
import { Footer } from "@/component/pages/PrivacyPolicy/Footer";

export const metadata = {
    title: "Privacy Policy | BrandStory Global",
    description: "Read BrandStory Global's Privacy Policy to understand how we collect, use, protect, and manage your personal information and website data.",
    alternates: {
        canonical: "/privacy-policy"
    }
};

const page =()=>{
    return(
        <>
            <Banner />
            <Terms />
            <Footer />
        </>
    )
}

export default page;