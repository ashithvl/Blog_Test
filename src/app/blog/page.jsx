import BlogComponent from "@/components/blog/Blog.component";

export const metadata = {
  title: "Blog | Your Site Name",
  description: "Explore our latest insights and articles.",
};

const BlogPage = () => {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <section className="flex-1">
        <BlogComponent />
      </section>
    </div>
  );
};

export default BlogPage;
