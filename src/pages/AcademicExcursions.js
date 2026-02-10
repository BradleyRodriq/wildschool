import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Star,
  Search,
  ArrowRight,
  Bus,
  Mountain,
  Building,
  TreeDeciduous,
  Camera,
  Globe,
  Mic,
  MessageCircle,
} from 'lucide-react';
import { excursions, categories as categoryList } from '../data/excursions';
import { talks } from '../data/talks';

const categoryIcons = {
  all: Globe,
  nature: TreeDeciduous,
  history: Building,
  science: Globe,
  culture: Camera,
  adventure: Mountain,
};

const TAB_EXCURSIONS = 'excursions';
const TAB_TALKS = 'talks';

const AcademicExcursions = () => {
  const [activeTab, setActiveTab] = useState(TAB_EXCURSIONS);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [talksSearch, setTalksSearch] = useState('');

  const filteredExcursions = excursions.filter((excursion) => {
    const matchesCategory = selectedCategory === 'all' || excursion.category === selectedCategory;
    const matchesSearch =
      excursion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excursion.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excursion.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredTalks = talks.filter(
    (talk) =>
      talk.title.toLowerCase().includes(talksSearch.toLowerCase()) ||
      talk.description.toLowerCase().includes(talksSearch.toLowerCase()) ||
      talk.topics.some((t) => t.toLowerCase().includes(talksSearch.toLowerCase()))
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Hard':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What We Offer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic excursions and educational talks. Request a booking or a talk — we'll contact you to confirm.
          </p>
        </motion.div>

        {/* Tabs: Excursions | Talks */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          role="tablist"
          aria-label="What we offer: excursions or talks"
          className="flex justify-center gap-2 mb-8 flex-wrap"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === TAB_EXCURSIONS}
            aria-controls="excursions-panel"
            id="excursions-tab"
            onClick={() => setActiveTab(TAB_EXCURSIONS)}
            className={`flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none ${
              activeTab === TAB_EXCURSIONS
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
            }`}
          >
            <MapPin className="w-5 h-5" aria-hidden="true" />
            Excursions
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === TAB_TALKS}
            aria-controls="talks-panel"
            id="talks-tab"
            onClick={() => setActiveTab(TAB_TALKS)}
            className={`flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none ${
              activeTab === TAB_TALKS
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
            }`}
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Talks
          </button>
        </motion.div>

        <div id="excursions-panel" role="tabpanel" aria-labelledby="excursions-tab" hidden={activeTab !== TAB_EXCURSIONS}>
        {activeTab === TAB_EXCURSIONS && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="search"
                    placeholder="Search destinations, activities, or locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search excursions by destination, activity, or location"
                    className="w-full pl-10 pr-4 py-3 min-h-[44px] text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                {categoryList.map((category) => {
                  const Icon = categoryIcons[category.id] || Globe;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}

        {activeTab === TAB_TALKS && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="search"
                placeholder="Search talks by title, topic, or description..."
                value={talksSearch}
                onChange={(e) => setTalksSearch(e.target.value)}
                aria-label="Search talks by title, topic, or description"
                className="w-full pl-10 pr-4 py-3 min-h-[44px] text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
          </motion.div>
        )}

        {activeTab === TAB_EXCURSIONS && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredExcursions.map((excursion, index) => (
            <motion.div
              key={excursion.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="card overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={excursion.image}
                  alt={excursion.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                      excursion.difficulty
                    )}`}
                  >
                    {excursion.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400">
                    <MapPin className="w-4 h-4" />
                    <span>{excursion.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {excursion.rating}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({excursion.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {excursion.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {excursion.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {excursion.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{excursion.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{excursion.groupSize}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{excursion.ageGroup}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bus className="w-4 h-4" />
                    <span>Transport included</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Available dates</h4>
                  <div className="flex flex-wrap gap-2">
                    {excursion.dates.map((date, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/book/${excursion.id}`}
                  className="btn-primary inline-flex items-center w-full sm:w-auto justify-center"
                >
                  Request booking
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        )}

        {activeTab === TAB_EXCURSIONS && filteredExcursions.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <MapPin className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No excursions found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn-primary"
            >
              View all excursions
            </button>
          </motion.div>
        )}
        </div>

        <div id="talks-panel" role="tabpanel" aria-labelledby="talks-tab" hidden={activeTab !== TAB_TALKS}>
        {activeTab === TAB_TALKS && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredTalks.map((talk, index) => (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="card overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={talk.image}
                    alt=""
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-600 text-white">
                      {talk.format}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {talk.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {talk.audience}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {talk.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {talk.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {talk.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    state={{
                      subject: `Talk request: ${talk.title}`,
                      message: `I'm interested in booking the talk "${talk.title}".\n\nPreferred date/time (if any):\n\nAdditional notes:`,
                    }}
                    className="btn-primary inline-flex items-center w-full sm:w-auto justify-center"
                  >
                    Request this talk
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === TAB_TALKS && filteredTalks.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Mic className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No talks found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search.
            </p>
            <button
              onClick={() => setTalksSearch('')}
              className="btn-primary"
            >
              View all talks
            </button>
          </motion.div>
        )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to book or request a talk?
          </h2>
          <p className="text-xl mb-6 text-primary-100">
            Choose an excursion or a talk above, or get in touch with any question. We'll contact you to confirm — no payment online.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="inline-flex items-center btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Book an excursion
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
              Contact us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicExcursions;
