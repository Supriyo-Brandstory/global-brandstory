import { LegalPageLayout } from "@/component/pages/Legal/LegalPageLayout";
import { DataRightsForm } from "@/component/pages/Legal/DataRightsForm";
import content from "@/content/legal/data-rights-request";

export const metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/data-rights-request" },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <LegalPageLayout content={content} />
      <DataRightsForm />
    </>
  );
}
