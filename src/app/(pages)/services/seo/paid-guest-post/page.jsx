import CommonDivider from "@/component/pages/common/CommonDivider";
import { Banner } from "@/component/pages/PaidGuestPost/Banner";
import { PostingBenifits } from "@/component/pages/PaidGuestPost/PostingBenifits";
import { PaidGuest } from "@/component/pages/PaidGuestPost/PaidGuest";
import { FivePhase } from "@/component/pages/PaidGuestPost/FivePhase";
import { GetPostingService } from "@/component/pages/PaidGuestPost/GetPostingService";
import { Clients } from "@/component/pages/PaidGuestPost/Clients";
import { Adv } from "@/component/pages/PaidGuestPost/Adv";
import CommonFAQ from "@/component/pages/common/CommonFAQ";
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("paid-guest-post");

const page = () => {
  const data = [
    {
      title: "What exactly are paid guest posts?",
      description:
        "These are blog articles published on third-party websites that include a backlink to your site. You’re paying for both the writing and the placement, not just a link drop.",
    },
    {
      title: "Is this the same as buying backlinks?",
      description:
        "Not really. We stay far away from link farms and low-quality networks. Every post we place is a proper editorial feature on a real website with an actual audience.",
    },
    {
      title: "Can I choose where my post goes?",
      description:
        "Yes. We’ll share a list of suitable websites before anything is published. You can review and approve each one.",
    },
    {
      title: "Who writes the articles?",
      description:
        "Our in-house writers. They research, write, and tailor every article based on your brand, SEO goals, and the publishing site’s tone.",
    },
    {
      title: "Can you support different regions or languages?",
      description:
        "Yes, we can. If your audience is global, we offer guest posting in local languages and region-specific blogs.",
    },
    {
      title: "Will this help my Domain Authority or SEO?",
      description:
        "Over time, yes. Consistent guest posts on quality domains build stronger backlink profiles, improve authority, and support long-term search growth.",
    },
  ];
  return (
    <>
      <Banner />
      <CommonDivider />
      <PostingBenifits />
      <CommonDivider />
      <PaidGuest />
      <CommonDivider />
      <FivePhase />
      <CommonDivider />
      <GetPostingService />
      <CommonDivider />
      <Clients />
      <CommonDivider />
      <Adv />
      <CommonDivider />
      <CommonFAQ data={data} />
    </>
  );
};

export default page;
