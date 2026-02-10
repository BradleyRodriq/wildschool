import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Updates, tips, and stories from Wild School Experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search blog posts"
              className="w-full pl-10 pr-4 py-3 min-h-[44px] text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          {filtered.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="card overflow-hidden block group hover:shadow-xl transition-all duration-300"
              >
                <div className="sm:flex">
                  <div className="sm:w-64 flex-shrink-0">
                    <img
                      src={post.image}
                      alt=""
                      className="w-full h-48 sm:h-full sm:min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <time
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2"
                      dateTime={post.date}
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </time>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-gray-500 dark:text-gray-400"
          >
            No posts match your search.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;
