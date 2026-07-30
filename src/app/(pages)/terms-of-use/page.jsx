import { LegalPageLayout } from "@/component/pages/Legal/LegalPageLayout";
import content from "@/content/legal/terms-of-use";

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/terms-of-use" },
};

export default function Page() {
  return <LegalPageLayout content={content} />;
}
