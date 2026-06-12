import { collectAllSitePages, formatLlmsTxt } from "@/lib/site-pages";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export async function GET() {
  const pages = await collectAllSitePages();
  const body = formatLlmsTxt(pages);

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
