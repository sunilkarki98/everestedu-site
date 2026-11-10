import { MetadataRoute } from 'next';
import { detailedCourses } from '@/data/courses';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eevsgroup.com';

  // Core static pages
  const staticPages = [
    '',
    '/about',
    '/migration',
    '/abroad-study',
    '/other-services',
    '/courses',
    '/blog',
    '/contact',
    '/universities',
    '/success-stories',
    '/tax-return',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Course Pages
  const coursePages = detailedCourses.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Blog Posts
  const blogPostUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...coursePages,
    ...blogPostUrls,
  ];
}

