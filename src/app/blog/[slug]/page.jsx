"use client";
import { useParams } from "next/navigation";
import VeliteBlogTemplate from "@/components/blog/VeliteBlogTemplate";
import veliteBlogs from "../../../../.velite/blog.json" with { type: "json" };

const BlogSlugPage = () => {
  const { slug } = useParams();
  const found = Array.isArray(veliteBlogs) ? veliteBlogs.find((b) => b.slug === slug) : null;
  if (!found) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-3xl font-bold text-primary">Blog Not Found</h1>
        <p className="text-gray-400 mt-2">The article you're looking for doesn't exist.</p>
      </div>
    );
  }
  return <VeliteBlogTemplate frontmatter={found} body={found.body || ""} />;
};

export default BlogSlugPage;
