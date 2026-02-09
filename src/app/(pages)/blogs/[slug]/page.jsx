// app/blog/[slug]/page.jsx  (or pages/blog/[slug].js)

import BlogDetailContent from "@/component/pages/Blogs/BlogDetailContent";
import ShareButtons from "@/component/pages/Blogs/blogShareButton";
import TableOfContents from "@/component/pages/Blogs/blogTableOfContent";
import Image from "next/image";

export default function DynamicBlogPage() {
    // dummy headings (later generate from content)
    const headings = [
        { id: "intro", text: "Introduction" },
        { id: "benefits", text: "Benefits" },
        { id: "features", text: "Features" },
        { id: "conclusion", text: "Conclusion" },
    ];

    return (
        <main className="py-20">
            <div className="container px-4 mx-auto">
                <div className="mb-8 max-w-5xl mt-10">
                    {/* title, tag and share button content */}
                    <div className="space-y-4">
                        <div className="">
                            <div className="tag-cards flex flex-wrap gap-3">
                                <div className="bg-[#FDF6F0] px-3 py-2">
                                    <h3 className="text-[#F15D22] text-[14px]">Experience Design</h3>
                                </div>
                                <div className="bg-[#FDF6F0] px-3 py-2">
                                    <h3 className="text-[#F15D22] text-[14px]">UX</h3>
                                </div>
                            </div>
                            <div>
                                {/* <Image src={""}/> */}
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl ">What Makes Digital <br />Experiences Truly Human</h1>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <div className="rounded-full">
                                <Image
                                    src={"/assets/images/blogs/author.png"}
                                    alt="Author Image"
                                    width={28}
                                    height={28}
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <p className="text-[#696A75] text-[24px] font-regular">Brandstory</p>
                            </div>
                            <div>
                                <p className="text-[#696A75] text-[18px] font-regular">January 3, 2026</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Content */}
                    <div className="lg:col-span-2">
                        <div className="mb-3">
                            <Image
                                src={"/assets/images/blogs/blog-detail.png"}
                                alt="Blog Preview Image"
                                width={800}
                                height={400}
                                className="w-full h-auto rounded-lg mb-8"
                            />
                        </div>
                        <BlogDetailContent
                            content={
                                <>
                                    <h1 id="intro">Introduction</h1>
                                    <p>This is your blog content from Strapi.</p>

                                    <h2 id="benefits">Benefits</h2>
                                    <p>Benefits section content...</p>

                                    <h2 id="features">Features</h2>
                                    <p>Features section content...</p>

                                    <h2 id="conclusion">Conclusion</h2>
                                    <p>Conclusion content...</p>
                                </>
                            }
                        />
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1">
                        <TableOfContents headings={headings} />
                        <ShareButtons/>
                    </div>
                </div>

            </div>
        </main>
    );
}
