import { redirect } from "next/navigation";

export const metadata = {
  title: "Terms of Use | BrandStory Global",
  alternates: { canonical: "/terms-of-use" },
};

export default function Page() {
  redirect("/terms-of-use");
}
