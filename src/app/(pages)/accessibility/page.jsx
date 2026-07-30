import { LegalPageLayout } from "@/component/pages/Legal/LegalPageLayout";
import content from "@/content/legal/accessibility";

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/accessibility" },
};

export default function Page() {
  return <LegalPageLayout content={content} />;
}
