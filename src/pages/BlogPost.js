import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import { getPostBySlug } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Post not found.</p>
          <Link to="/blog" className="btn-primary inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

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
      <article className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </button>

          <header className="mb-8">
            <time
              className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2"
              dateTime={post.date}
            >
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(post.date)}
            </time>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h1>
            {post.author && (
              <p className="text-gray-600 dark:text-gray-400 text-sm">{post.author}</p>
            )}
          </header>

          <div className="card overflow-hidden p-0">
            <img
              src={post.image}
              alt=""
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
