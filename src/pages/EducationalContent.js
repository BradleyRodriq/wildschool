import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  Play, 
  Clock, 
  Users,
  Search,
  Filter,
  Star,
  Bookmark,
  Share2
} from 'lucide-react';

const EducationalContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Subjects', color: 'from-gray-500 to-gray-600' },
    { id: 'science', name: 'Science', color: 'from-blue-500 to-cyan-500' },
    { id: 'math', name: 'Mathematics', color: 'from-green-500 to-emerald-500' },
    { id: 'history', name: 'History', color: 'from-yellow-500 to-orange-500' },
    { id: 'literature', name: 'Literature', color: 'from-purple-500 to-pink-500' },
    { id: 'arts', name: 'Arts & Music', color: 'from-red-500 to-pink-500' },
    { id: 'technology', name: 'Technology', color: 'from-indigo-500 to-purple-500' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Introduction to Quantum Physics",
      subject: "science",
      type: "video",
      duration: "45 min",
      level: "Advanced",
      rating: 4.8,
      students: 1247,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop&crop=center",
      description: "Explore the fascinating world of quantum mechanics with interactive simulations and real-world applications.",
      tags: ["Physics", "Quantum", "Advanced", "Interactive"]
    },
    {
      id: 2,
      title: "Calculus Fundamentals",
      subject: "math",
      type: "interactive",
      duration: "2 hours",
      level: "Intermediate",
      rating: 4.9,
      students: 2156,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop&crop=center",
      description: "Master the basics of calculus with step-by-step problem solving and visual representations.",
      tags: ["Mathematics", "Calculus", "Intermediate", "Step-by-step"]
    },
    {
      id: 3,
      title: "Ancient Civilizations",
      subject: "history",
      type: "document",
      duration: "1.5 hours",
      level: "Beginner",
      rating: 4.7,
      students: 892,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
      description: "Journey through time to explore the rise and fall of ancient civilizations across the globe.",
      tags: ["History", "Ancient", "Beginner", "Comprehensive"]
    },
    {
      id: 4,
      title: "Shakespeare's Masterpieces",
      subject: "literature",
      type: "video",
      duration: "3 hours",
      level: "Intermediate",
      rating: 4.6,
      students: 1567,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
      description: "Analyze the timeless works of William Shakespeare with modern interpretations and analysis.",
      tags: ["Literature", "Shakespeare", "Intermediate", "Analysis"]
    },
    {
      id: 5,
      title: "Digital Art Fundamentals",
      subject: "arts",
      type: "interactive",
      duration: "4 hours",
      level: "Beginner",
      rating: 4.8,
      students: 2034,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop&crop=center",
      description: "Learn the basics of digital art creation with hands-on projects and creative exercises.",
      tags: ["Art", "Digital", "Beginner", "Hands-on"]
    },
    {
      id: 6,
      title: "Web Development Basics",
      subject: "technology",
      type: "interactive",
      duration: "6 hours",
      level: "Beginner",
      rating: 4.9,
      students: 3421,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop&crop=center",
      description: "Build your first website with HTML, CSS, and JavaScript through practical projects.",
      tags: ["Technology", "Web Development", "Beginner", "Practical"]
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.subject === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'interactive':
        return <Play className="w-4 h-4" />;
      case 'document':
        return <FileText className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video':
        return 'bg-blue-100 text-blue-600';
      case 'interactive':
        return 'bg-green-100 text-green-600';
      case 'document':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Educational Content Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access thousands of high-quality educational resources, interactive modules, and expert-curated content across all subjects.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for content, subjects, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Button */}
            <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="card overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Bookmark className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)} flex items-center space-x-1`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                    {item.subject}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{item.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                    {item.level}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 btn-primary text-sm py-2">
                    Start Learning
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {filteredContent.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="btn-outline px-8 py-3">
              Load More Content
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredContent.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category selection.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn-primary"
            >
              View All Content
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EducationalContent;
