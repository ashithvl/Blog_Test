import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
