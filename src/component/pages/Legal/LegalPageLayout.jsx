import { CommonNoticeBanner } from "@/component/pages/common/CommonNoticeBanner";
import CommonTextOnly from "@/component/pages/common/CommonTextOnly";
import { LEGAL_CONFIG, resolveLegalToken } from "@/config/legal";

function mapSections(sections = []) {
  return sections.map((section) => ({
    ...section,
    title: resolveLegalToken(section.title),
    paragraphs: section.paragraphs?.map(resolveLegalToken),
    list: section.list?.map(resolveLegalToken),
    paragraphsAfter: section.paragraphsAfter?.map(resolveLegalToken),
  }));
}

export function LegalPageLayout({ content }) {
  if (!content) return null;

  const intro = resolveLegalToken(content.intro || "");
  const sections = mapSections(content.sections || []);

  return (
    <>
      <CommonNoticeBanner
        heading={content.title}
        date={LEGAL_CONFIG.LAST_UPDATED_DATE}
        paragraph={intro}
      />
      {sections.length > 0 ? <CommonTextOnly data={sections} /> : null}
    </>
  );
}
