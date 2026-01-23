import CommonDivider from "@/component/pages/common/CommonDivider";
import { Banner } from "@/component/pages/PaidGuestPost/Banner";
import { PostingBenifits } from "@/component/pages/PaidGuestPost/PostingBenifits";
import { PaidGuest } from "@/component/pages/PaidGuestPost/PaidGuest";
import { FivePhase } from "@/component/pages/PaidGuestPost/FivePhase";
import { GetPostingService } from "@/component/pages/PaidGuestPost/GetPostingService";
import { Clients } from "@/component/pages/PaidGuestPost/Clients";
import { Adv } from "@/component/pages/PaidGuestPost/Adv";
import CommonFAQ from "@/component/pages/common/CommonFAQ";

const page = () => {
  const data = [
    {
      title: "What exactly are paid guest posts?",
      description:
        "Paid guest posts are articles that are published on other websites in exchange for a backlink to your website. These backlinks can help improve your website's search engine rankings and increase traffic to your website.",
    },
    {
      title: "Is this the same as buying backlinks?",
      description:
        "No, paid guest posts are different from buying backlinks. Paid guest posts are articles that are published on other websites in exchange for a backlink to your website. These backlinks can help improve your website's search engine rankings and increase traffic to your website.",
    },
    {
      title: "Can I choose where my post goes?",
      description:
        "Yes, we can help you choose where your post goes. We can help you choose where your post goes. We can help you choose where your post goes.",
    },
    {
      title: "Who writes the articles?",
      description:
        "Yes, we can help you choose where your post goes. We can help you choose where your post goes. We can help you choose where your post goes.",
    },
    {
      title: "Can you support different regions or languages?",
      description:
        "Yes, we can help you choose where your post goes. We can help you choose where your post goes. We can help you choose where your post goes.",
    },
    {
      title: "Will this help my Domain Authority or SEO?",
      description:
        "Yes, paid guest posts can help improve your website's search engine rankings and increase traffic to your website.",
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
