import { LegalPageLayout } from "@/component/pages/Legal/LegalPageLayout";
import content from "@/content/legal/us-state-privacy-notice";

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/us-state-privacy-notice" },
};

export default function Page() {
  return <LegalPageLayout content={content} />;
}
