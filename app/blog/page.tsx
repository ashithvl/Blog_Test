import Link from "next/link";

// Sample blog data
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications with React Server Components.",
    date: "March 15, 2024",
    author: "John Doe",
    category: "Web Development",
  },
  {
    id: "2",
    title: "Mastering TypeScript for React",
    excerpt: "A comprehensive guide to using TypeScript effectively in React applications, covering best practices and common patterns.",
    date: "March 10, 2024",
    author: "Jane Smith",
    category: "Programming",
  },
  {
    id: "3",
    title: "The Future of Web Design",
    excerpt: "Exploring the latest trends in web design and how they're shaping the future of user experience on the web.",
    date: "March 5, 2024",
    author: "Alex Johnson",
    category: "Design",
  },
  {
    id: "4",
    title: "Building Scalable Applications",
    excerpt: "Best practices for building applications that can grow with your business, from architecture to deployment strategies.",
    date: "February 28, 2024",
    author: "Sarah Williams",
    category: "Architecture",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                BlogTest
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-blue-600 dark:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover insights, tutorials, and stories from our team
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                  Read more
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 BlogTest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
