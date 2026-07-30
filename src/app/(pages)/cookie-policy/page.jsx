import { LegalPageLayout } from "@/component/pages/Legal/LegalPageLayout";
import content from "@/content/legal/cookie-policy";

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/cookie-policy" },
};

export default function Page() {
  return <LegalPageLayout content={content} />;
}
