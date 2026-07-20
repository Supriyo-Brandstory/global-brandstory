import { Banner } from "@/component/pages/TermsAndConditions/Banner";
import { Terms } from "@/component/pages/TermsAndConditions/Terms";
import { Footer } from "@/component/pages/TermsAndConditions/Footer";

export const metadata = {
    title: "Terms and Conditions | BrandStory Global",
    description: "Review BrandStory Global's Terms and Conditions outlining the use of our website, services, intellectual property, and legal responsibilities.",
    alternates: {
        canonical: "/terms-and-conditions"
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