import Link from "next/link";
import Image from "next/image";
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
  images?: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
}> = {
  "1": {
    id: "1",
    title: "Getting Started with Next.js 14: A Comprehensive Guide to Modern Web Development",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications with React Server Components.",
    date: "March 15, 2024",
    author: "John Doe",
    category: "Web Development",
    images: [
      {
        url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
        alt: "Next.js 14 Development",
        caption: "Next.js 14 brings powerful new features for modern web development"
      },
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
        alt: "React Server Components",
        caption: "React Server Components revolutionize how we build React applications"
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
        alt: "Code Development",
        caption: "Next.js 14 provides an excellent developer experience"
      },
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
        alt: "Performance Optimization",
        caption: "Performance is at the core of Next.js 14's design philosophy"
      }
    ],
    content: `Next.js 14 represents a significant leap forward in React-based web development. With the introduction of React Server Components, improved performance optimizations, and enhanced developer experience, this latest version has solidified Next.js as the premier framework for building modern web applications. Whether you're a seasoned developer or just starting your journey with React, understanding Next.js 14 is crucial for staying current with web development best practices.

## Introduction to Next.js 14

Next.js 14 builds upon the solid foundation established by previous versions while introducing groundbreaking features that fundamentally change how developers approach React application development. The framework continues to evolve, addressing real-world challenges faced by developers building production applications at scale. This comprehensive guide will walk you through everything you need to know about Next.js 14, from basic concepts to advanced patterns and best practices.

The framework's philosophy centers around providing developers with the tools they need to build fast, scalable, and maintainable applications without sacrificing developer experience. Next.js 14 achieves this through a combination of intelligent defaults, powerful abstractions, and a commitment to web standards and performance.

## What's New in Next.js 14?

The latest version brings several exciting features that significantly enhance both developer productivity and application performance. Understanding these new features is essential for leveraging the full power of Next.js 14 in your projects.

### React Server Components

Perhaps the most significant change in Next.js 14 is the full integration of React Server Components. By default, all components are server components, which means they render on the server and send only the necessary HTML to the client. This revolutionary approach reduces the JavaScript bundle size sent to the client, resulting in faster initial page loads and improved performance metrics.

Server Components can directly access databases, file systems, and other backend services without exposing sensitive information to the client. This eliminates the need for API routes in many cases, simplifying your application architecture. Server Components also enable better SEO since content is rendered on the server, making it immediately available to search engines.

The mental model shift required for Server Components is significant. Developers must now think about which components need client-side interactivity and which can remain on the server. This distinction becomes crucial when building applications that balance interactivity with performance.

### Improved Performance

Next.js 14 introduces several performance improvements that make applications faster than ever. The new caching strategies are more intelligent, automatically optimizing data fetching and rendering. The framework now provides better support for streaming, allowing pages to render progressively as data becomes available.

The improved performance isn't just about speed—it's also about resource efficiency. Next.js 14 uses less memory and CPU resources, making it more cost-effective to run applications in production environments. These optimizations are particularly important for applications serving users on slower connections or less powerful devices.

### Enhanced Developer Experience

Developer experience improvements in Next.js 14 make the framework more approachable and productive. Better error messages help developers quickly identify and fix issues. The improved TypeScript support provides better type inference and autocomplete, reducing the cognitive load when writing code.

The new Turbopack bundler, while still in beta, promises significantly faster development builds. This improvement is particularly noticeable in larger projects where build times can become a bottleneck. The development server now starts faster and hot module replacement is more reliable, creating a smoother development workflow.

### App Router Maturity

The App Router, introduced in Next.js 13, has matured significantly in version 14. The routing system is now more stable, with better support for complex routing patterns. Layouts, loading states, and error boundaries work seamlessly together, providing developers with powerful tools for building robust applications.

The App Router's file-based routing system makes it intuitive to understand application structure. Nested layouts enable code reuse and consistent UI patterns across different sections of your application. The parallel routes feature allows for more sophisticated routing patterns, such as conditional layouts or modals.

## Getting Started with Next.js 14

Setting up a new Next.js 14 project is straightforward, thanks to the excellent tooling provided by the framework. The create-next-app command has been updated to include all the latest features and best practices.

### Installation

To create a new Next.js 14 project, simply run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This command will prompt you with several options, including whether to use TypeScript, Tailwind CSS, ESLint, and other features. For most projects, accepting the recommended defaults provides an excellent starting point. The setup process creates a well-structured project with sensible defaults that follow Next.js best practices.

Once the project is created, you can start the development server with:

\`\`\`bash
npm run dev
\`\`\`

The development server will start on http://localhost:3000, and you'll see your application running with hot module replacement enabled. Any changes you make to your code will be reflected immediately in the browser.

### Project Structure

Understanding the Next.js 14 project structure is crucial for effective development. The App Router uses a file-based routing system where folders define routes and special files define UI and behavior. The \`app\` directory contains your application code, with each folder representing a route segment.

Special files like \`layout.tsx\`, \`page.tsx\`, \`loading.tsx\`, and \`error.tsx\` have specific purposes. Layouts wrap pages and persist across navigation, pages define the UI for routes, loading components show while data is being fetched, and error components handle errors gracefully.

The \`public\` directory contains static assets like images, fonts, and other files that should be served directly. The \`components\` directory is where you'll organize your reusable React components. While not required, organizing components by feature or type helps maintain larger codebases.

## Key Concepts and Patterns

Understanding the core concepts of Next.js 14 is essential for building effective applications. These concepts form the foundation upon which all Next.js applications are built.

### Server Components vs Client Components

The distinction between Server Components and Client Components is fundamental to Next.js 14 development. Server Components run on the server, meaning they can directly access backend resources and don't send JavaScript to the client. They're perfect for data fetching, accessing databases, and rendering static or dynamic content.

Client Components, marked with the "use client" directive, run in the browser and can use React hooks, browser APIs, and handle user interactions. They're necessary for interactive features like forms, buttons, and any component that needs to respond to user input.

The key is to use Server Components by default and only add the "use client" directive when you need client-side interactivity. This approach minimizes the JavaScript sent to the client, improving performance. However, you can't use hooks or browser APIs in Server Components, so you'll need to create Client Components for interactive features.

### Data Fetching Patterns

Next.js 14 provides several patterns for fetching data, each suited to different use cases. Server Components can use async/await directly, making data fetching straightforward. The framework also provides special functions like \`fetch\` with automatic caching and revalidation.

For data that changes frequently, you can use the \`revalidate\` option to control how often data is refreshed. Static data can be fetched at build time, while dynamic data can be fetched on each request. The flexibility allows you to optimize for your specific use case.

The \`loading.tsx\` file enables you to show loading states while data is being fetched. This creates a better user experience by providing immediate feedback. Similarly, \`error.tsx\` files allow you to handle errors gracefully, preventing entire pages from breaking when something goes wrong.

### Routing and Navigation

Next.js 14's App Router provides a powerful and intuitive routing system. Routes are created by adding folders and files in the \`app\` directory. Dynamic routes use square brackets, like \`[id]\`, and catch-all routes use \`[...slug]\`.

The \`Link\` component provides client-side navigation, which is faster than full page reloads. It prefetches linked pages in the background, making navigation feel instant. The \`useRouter\` hook provides programmatic navigation for more complex scenarios.

Layouts enable you to share UI across multiple routes, reducing code duplication. Nested layouts create hierarchical structures that match your application's information architecture. This pattern is particularly useful for applications with complex navigation structures.

### Styling Approaches

Next.js 14 supports multiple styling approaches, giving you flexibility in how you style your applications. CSS Modules provide scoped styling without the overhead of CSS-in-JS solutions. Tailwind CSS is popular for utility-first styling, and the framework provides excellent support for it.

Global styles can be added in the root layout, while component-specific styles can use CSS Modules or styled-components. The choice depends on your team's preferences and project requirements. Next.js doesn't enforce a particular styling approach, allowing you to use what works best for your situation.

## Advanced Features and Patterns

As you become more comfortable with Next.js 14 basics, exploring advanced features will help you build more sophisticated applications. These features enable patterns that would be difficult or impossible with other frameworks.

### Server Actions

Server Actions provide a type-safe way to mutate data on the server from Client Components. They eliminate the need for API routes in many cases, simplifying your application architecture. Server Actions are functions marked with "use server" that can be called directly from Client Components.

This pattern is particularly powerful for forms and other data mutations. Instead of creating API routes and handling fetch requests, you can call Server Actions directly, with full type safety and automatic error handling. The framework handles serialization and network requests automatically.

### Streaming and Suspense

Next.js 14's support for React Suspense enables streaming rendering, where parts of a page can render as their data becomes available. This creates a better user experience by showing content progressively rather than waiting for everything to load.

The \`loading.tsx\` file works seamlessly with Suspense, automatically showing loading states for routes and their nested segments. This pattern is particularly useful for pages that fetch data from multiple sources, as users can see content as it becomes available rather than waiting for everything.

### Metadata and SEO

Next.js 14 provides excellent support for metadata and SEO through the Metadata API. You can export metadata objects from layouts and pages, and the framework will automatically generate the appropriate HTML meta tags. This includes support for Open Graph, Twitter Cards, and other social media metadata.

Dynamic metadata can be generated based on route parameters or fetched data, enabling rich, contextual metadata for each page. This is crucial for SEO and social media sharing, as proper metadata significantly impacts how your content appears in search results and social feeds.

### Image Optimization

The Next.js Image component provides automatic image optimization, including format conversion, responsive sizing, and lazy loading. This significantly improves performance, as images are often the largest assets on a page.

The Image component requires width and height for proper layout shift prevention, though the framework provides ways to handle this automatically for certain use cases. Using the Image component instead of regular img tags is one of the easiest performance wins you can achieve.

## Best Practices and Performance Optimization

Following best practices ensures your Next.js 14 applications are performant, maintainable, and scalable. These practices have been refined through real-world usage and represent the collective wisdom of the Next.js community.

### Component Organization

Organizing components effectively is crucial for maintainability. Group related components together, use clear naming conventions, and keep components focused on a single responsibility. Server Components should be the default, with Client Components used only when necessary.

Creating a clear separation between Server and Client Components helps maintain the performance benefits of Server Components. Consider creating a \`components\` directory with subdirectories for server and client components if your project is large enough to warrant it.

### Performance Optimization

Performance optimization in Next.js 14 happens at multiple levels. Using Server Components reduces JavaScript bundle size, proper image optimization reduces bandwidth usage, and intelligent caching reduces server load. The framework handles many optimizations automatically, but understanding them helps you make informed decisions.

Monitoring performance metrics like Core Web Vitals helps identify areas for improvement. Next.js provides built-in support for measuring these metrics, and tools like Lighthouse can help identify optimization opportunities. Regular performance audits ensure your application remains fast as it grows.

### Error Handling

Proper error handling is crucial for production applications. Next.js 14's error boundaries, implemented through \`error.tsx\` files, provide a way to handle errors gracefully without breaking entire pages. These error boundaries catch errors in their component tree and display fallback UI.

Logging errors appropriately helps with debugging and monitoring. Consider integrating error tracking services to get visibility into production errors. The framework's error handling works seamlessly with these services, providing comprehensive error management.

### Security Considerations

Security is an important consideration when building web applications. Next.js 14 provides several built-in security features, including automatic XSS protection and secure defaults. However, developers must still be mindful of security best practices.

Never expose sensitive information in Client Components, use environment variables for configuration, and validate user input. The framework's Server Components help by keeping sensitive logic on the server, but developers must still follow security best practices.

## Real-World Application Patterns

Understanding how to apply Next.js 14 concepts in real-world scenarios is essential for building production applications. These patterns represent common scenarios you'll encounter when building applications.

### Building a Blog

A blog is an excellent use case for Next.js 14's Server Components and static generation. Blog posts can be statically generated at build time, providing excellent performance. The App Router's dynamic routes make it easy to create individual post pages.

Using markdown files or a CMS for content, you can fetch posts in Server Components and render them efficiently. The framework's support for metadata makes it easy to add proper SEO tags for each post. This pattern scales well and provides excellent performance.

### E-commerce Applications

E-commerce applications benefit from Next.js 14's hybrid rendering approach. Product listings can be statically generated for performance, while product pages with dynamic pricing can use server-side rendering. Shopping carts and checkout flows can use Client Components for interactivity.

Server Actions are perfect for handling form submissions and data mutations in e-commerce applications. They provide type safety and eliminate the need for separate API routes. This pattern simplifies the codebase while maintaining security and performance.

### Dashboard Applications

Dashboard applications often require authentication, real-time data, and complex interactions. Next.js 14's middleware enables authentication checks before rendering, and Server Components can fetch user-specific data securely. Client Components handle interactive features like charts and filters.

The App Router's support for parallel routes enables sophisticated dashboard layouts with multiple panels that can load independently. This creates a better user experience by showing content progressively rather than waiting for everything to load.

## Migration and Upgrading

If you're working with an existing Next.js application, understanding the migration path to version 14 is important. The framework provides migration guides and tools to help with the transition.

Most applications can be upgraded incrementally, adopting new features gradually. The Pages Router continues to work alongside the App Router, allowing for gradual migration. However, new projects should use the App Router, as it represents the future of Next.js development.

## Conclusion

Next.js 14 represents a significant evolution in React-based web development. The introduction of React Server Components, improved performance, and enhanced developer experience make it an excellent choice for building modern web applications. Whether you're building a simple blog or a complex enterprise application, Next.js 14 provides the tools and patterns you need to succeed.

The framework's commitment to performance, developer experience, and web standards ensures that applications built with Next.js 14 will remain relevant and maintainable. As the web continues to evolve, Next.js 14 positions developers to take advantage of new capabilities while maintaining backward compatibility and stability.

Investing time in learning Next.js 14 pays dividends in productivity, performance, and maintainability. The framework's active community, comprehensive documentation, and commitment to best practices make it an excellent choice for projects of all sizes. As you build applications with Next.js 14, you'll discover new patterns and techniques that make development more enjoyable and applications more performant.`,
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
            {/* Hero Image */}
            {post.images && post.images.length > 0 && (
              <div className="mb-8 -mx-8 md:-mx-12">
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={post.images[0].url}
                    alt={post.images[0].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {post.images[0].caption && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2 text-center">
                    {post.images[0].caption}
                  </p>
                )}
              </div>
            )}

            {(() => {
              const paragraphs = post.content.split('\n\n');
              const sections: number[] = [];
              paragraphs.forEach((p, idx) => {
                if (p.startsWith('## ')) {
                  sections.push(idx);
                }
              });

              let imageCounter = 1; // Start from 1 since 0 is the hero image

              return paragraphs.map((paragraph, index) => {
                // Insert images after certain sections
                let shouldInsertImage = false;
                let currentImageIndex = -1;

                if (post.images && imageCounter < post.images.length) {
                  // Insert image after the 2nd, 4th, and 6th sections
                  if (sections.includes(index) && (sections.indexOf(index) === 1 || sections.indexOf(index) === 3 || sections.indexOf(index) === 5)) {
                    shouldInsertImage = true;
                    currentImageIndex = imageCounter;
                    imageCounter++;
                  }
                }

                return (
                  <div key={index}>
                    {shouldInsertImage && post.images && post.images[currentImageIndex] && (
                      <div className="my-12 -mx-8 md:-mx-12">
                        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                          <Image
                            src={post.images[currentImageIndex].url}
                            alt={post.images[currentImageIndex].alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {post.images[currentImageIndex].caption && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2 text-center">
                            {post.images[currentImageIndex].caption}
                          </p>
                        )}
                      </div>
                    )}

                  {paragraph.startsWith('## ') ? (
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  ) : paragraph.startsWith('### ') ? (
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  ) : paragraph.startsWith('1. ') || paragraph.startsWith('- ') ? (
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                      {paragraph.split('\n').filter(line => line.trim().startsWith('1. ') || line.trim().startsWith('- ')).map((item, itemIndex) => (
                        <li key={itemIndex}>{item.replace(/^[1-9]\.\s*|^-\s*/, '')}</li>
                      ))}
                    </ul>
                  ) : paragraph.includes('```') ? (
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 dark:text-gray-200">
                        <code>{paragraph.replace(/```[\w]*\n?/g, '').replace(/```/g, '')}</code>
                      </pre>
                    </div>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  )}
                  </div>
                );
              });
            })()}
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
