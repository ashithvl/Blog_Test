import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog data
const blogPosts: Record<string, {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: string;
}> = {
  "1": {
    id: "1",
    title: "Getting Started with Next.js 14",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications with React Server Components.",
    date: "March 15, 2024",
    author: "John Doe",
    category: "Web Development",
    content: `Next.js 14 represents a significant leap forward in React-based web development. With the introduction of React Server Components, developers can now build more efficient and performant applications.

## What's New in Next.js 14?

The latest version brings several exciting features:

1. **React Server Components**: By default, all components are server components, reducing the JavaScript bundle size sent to the client.

2. **Improved Performance**: Better caching strategies and optimized rendering make applications faster than ever.

3. **Enhanced Developer Experience**: Better error messages, improved TypeScript support, and more intuitive APIs.

## Getting Started

To create a new Next.js 14 project, simply run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features and best practices configured.

## Key Concepts

Understanding Server Components is crucial for Next.js 14 development. Server Components run on the server, meaning they can directly access databases and backend services without exposing sensitive information to the client.

Client Components, marked with the "use client" directive, run in the browser and can use React hooks and browser APIs.

## Conclusion

Next.js 14 is a powerful framework that makes building modern web applications easier and more efficient. Whether you're building a simple blog or a complex enterprise application, Next.js 14 provides the tools you need to succeed.`,
  },
  "2": {
    id: "2",
    title: "Mastering TypeScript for React",
    excerpt: "A comprehensive guide to using TypeScript effectively in React applications, covering best practices and common patterns.",
    date: "March 10, 2024",
    author: "Jane Smith",
    category: "Programming",
    content: `TypeScript has become the de facto standard for building large-scale React applications. Its type system helps catch errors early and makes code more maintainable.

## Why TypeScript?

TypeScript offers several advantages:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Autocomplete and refactoring tools work better
- **Self-Documenting Code**: Types serve as inline documentation
- **Easier Refactoring**: Confident changes with type checking

## TypeScript Basics for React

When working with React components, you'll commonly use these patterns:

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
\`\`\`

## Advanced Patterns

For more complex scenarios, TypeScript's utility types come in handy:

- \`Partial<T>\`: Makes all properties optional
- \`Pick<T, K>\`: Select specific properties
- \`Omit<T, K>\`: Exclude specific properties

## Best Practices

1. Always define interfaces for props
2. Use type inference where possible
3. Leverage TypeScript's strict mode
4. Create reusable type definitions

TypeScript and React together create a powerful combination for building robust, maintainable applications.`,
  },
  "3": {
    id: "3",
    title: "The Future of Web Design",
    excerpt: "Exploring the latest trends in web design and how they're shaping the future of user experience on the web.",
    date: "March 5, 2024",
    author: "Alex Johnson",
    category: "Design",
    content: `Web design continues to evolve at a rapid pace, with new trends and technologies shaping how users interact with digital experiences.

## Current Trends

### 1. Minimalism and Clean Design
Less is more continues to be a guiding principle. Clean, uncluttered interfaces help users focus on what matters.

### 2. Dark Mode
Dark mode has become standard, reducing eye strain and saving battery life on OLED displays.

### 3. Micro-interactions
Subtle animations and transitions create a more engaging and polished user experience.

### 4. Responsive Design
With mobile traffic exceeding desktop, responsive design is no longer optional—it's essential.

## Emerging Technologies

### AI-Powered Design Tools
Artificial intelligence is revolutionizing design workflows, from generating layouts to optimizing user flows.

### Voice Interfaces
As voice assistants become more common, designing for voice interactions is becoming increasingly important.

### Augmented Reality
AR is finding its way into web experiences, offering new ways to engage users.

## The Future

Looking ahead, we can expect:

- More personalized experiences driven by AI
- Increased focus on accessibility
- Integration of immersive technologies
- Emphasis on performance and sustainability

The future of web design is exciting, with endless possibilities for creating meaningful user experiences.`,
  },
  "4": {
    id: "4",
    title: "Building Scalable Applications",
    excerpt: "Best practices for building applications that can grow with your business, from architecture to deployment strategies.",
    date: "February 28, 2024",
    author: "Sarah Williams",
    category: "Architecture",
    content: `Building applications that can scale is one of the most important challenges in software development. Here's how to approach it.

## Architecture Principles

### 1. Modular Design
Break your application into independent, reusable modules. This makes it easier to maintain and scale individual components.

### 2. Microservices vs Monolith
Choose the right architecture for your needs. Microservices offer flexibility but add complexity. Monoliths are simpler but can become unwieldy as they grow.

### 3. Database Design
Design your database schema with scalability in mind:
- Use proper indexing
- Normalize where appropriate
- Consider read replicas for heavy read workloads
- Plan for sharding if needed

## Performance Optimization

### Caching Strategies
Implement caching at multiple levels:
- Browser caching
- CDN caching
- Application-level caching
- Database query caching

### Load Balancing
Distribute traffic across multiple servers to handle increased load and improve availability.

### Database Optimization
- Use connection pooling
- Optimize queries
- Consider NoSQL for specific use cases
- Implement proper indexing strategies

## Deployment and Monitoring

### CI/CD Pipelines
Automate your deployment process to ensure consistent, reliable releases.

### Monitoring and Observability
Implement comprehensive monitoring:
- Application performance monitoring (APM)
- Error tracking
- Log aggregation
- Real-time alerts

### Auto-scaling
Configure auto-scaling to automatically adjust resources based on demand.

## Best Practices

1. **Start Simple**: Don't over-engineer from the start
2. **Measure Everything**: Use metrics to guide optimization
3. **Plan for Failure**: Design with failure scenarios in mind
4. **Document Everything**: Maintain clear documentation
5. **Iterate**: Continuously improve based on real-world usage

Building scalable applications requires careful planning, the right tools, and a focus on performance from the start.`,
  },
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id];

  if (!post) {
    notFound();
  }

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
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <div className="mb-6">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          {post.title}
        </h1>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center mr-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.trim().startsWith('1. ') || line.trim().startsWith('- '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.replace(/^[1-9]\.\s*|^-\s*/, '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.includes('```')) {
                return null; // Skip code blocks for simplicity
              }
              return (
                <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Posts
          </Link>
        </div>
      </article>

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
