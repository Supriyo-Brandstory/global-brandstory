import { LegalPageLayout } from "@/component/pages/Legal/LegalPageLayout";
import content from "@/content/legal/subprocessors";

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/subprocessors" },
};

export default function Page() {
  return <LegalPageLayout content={content} />;
}
