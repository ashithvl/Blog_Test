"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import veliteBlogs from "../../../.velite/blog.json" with { type: "json" };

function sortByDateDesc(a, b) {
  return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
}

export default function BlogComponent() {
  const blogs = Array.isArray(veliteBlogs) ? veliteBlogs : [];
  const sortedBlogs = [...blogs].sort(sortByDateDesc);
  return (
    <section className="relative w-full py-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-secondary text-center pb-2">Our Blogs</h1>
        <p className="text-secondary-mono text-center max-w-2xl mx-auto mt-3">
          Explore our latest insights and articles.
        </p>
        <div className="mt-6 w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent mx-auto mb-12" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedBlogs.map((blog, idx) => (
            <Link key={blog.slug || idx} href={`/blog/${blog.slug}`}
              className="relative cursor-pointer group rounded-xl border border-primary/30 bg-primary/10 overflow-hidden backdrop-blur-md flex flex-col transition-all duration-500 hover:-translate-y-2">
              <div className="relative w-full h-100 md:h-70 overflow-hidden">
                {blog.coverImageUrl ? (
                  <Image src={blog.coverImageUrl} alt={blog.title} fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                ) : (
                  <div className="bg-slate-200 w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-grow p-6 relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  {blog.category || "Blog"}
                </span>
                <h3 className="text-lg md:text-xl font-semibold my-4 leading-snug text-secondary">
                  {blog.title}
                </h3>
                <p className="text-secondary-mono text-sm leading-relaxed line-clamp-3">
                  {blog.description}
                </p>
                <div className="mt-auto pt-6 text-primary text-xs font-semibold flex items-center gap-2">
                  READ MORE <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
