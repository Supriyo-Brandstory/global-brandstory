import { LegalPageLayout } from "@/component/pages/Legal/LegalPageLayout";
import content from "@/content/legal/careers-privacy";

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/careers-privacy" },
};

export default function Page() {
  return <LegalPageLayout content={content} />;
}
