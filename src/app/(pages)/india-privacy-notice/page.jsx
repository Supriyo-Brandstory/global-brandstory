import { LegalPageLayout } from "@/component/pages/Legal/LegalPageLayout";
import content from "@/content/legal/india-privacy-notice";

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/india-privacy-notice" },
};

export default function Page() {
  return <LegalPageLayout content={content} />;
}
