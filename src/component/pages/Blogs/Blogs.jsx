
import { getAllBlogs } from "@/lib/services/api";
import { CommonBlog } from "../common/CommonBlogs";

export const Blogs = async ({ searchParams }) => {
  const params = await searchParams;
  const page = parseInt(params?.page) || 1;
  const category = params?.category || "All";

  const blogsData = await getAllBlogs(page, 6, category);
  // console.log(blogsData)
  return (
    <CommonBlog blogData={blogsData} activeFilter={category} currentPage={page} />
  );
};