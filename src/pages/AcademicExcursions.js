import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  Heart,
  Share2,
  Filter,
  Search,
  ArrowRight,
  Bus,
  Mountain,
  Building,
  TreeDeciduous,
  Camera,
  Globe
} from 'lucide-react';

const AcademicExcursions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Destinations', icon: Globe, color: 'from-gray-500 to-gray-600' },
    { id: 'nature', name: 'Nature & Wildlife', icon: TreeDeciduous, color: 'from-green-500 to-emerald-500' },
    { id: 'history', name: 'Historical Sites', icon: Building, color: 'from-yellow-500 to-orange-500' },
    { id: 'science', name: 'Science Centers', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'culture', name: 'Cultural Sites', icon: Camera, color: 'from-purple-500 to-pink-500' },
    { id: 'adventure', name: 'Adventure', icon: Mountain, color: 'from-red-500 to-pink-500' }
  ];

  const excursions = [
    {
      id: 1,
      title: "Marine Biology Discovery",
      category: "nature",
      location: "Pacific Coast Marine Reserve",
      duration: "1 Day",
      groupSize: "15-25 students",
      price: "$45",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      description: "Explore the diverse marine ecosystem through guided tours, hands-on activities, and interactive learning stations.",
      highlights: ["Marine life observation", "Conservation education", "Beach ecology", "Water quality testing"],
      included: ["Transportation", "Expert guide", "Equipment", "Lunch", "Educational materials"],
      dates: ["Mar 15, 2024", "Apr 12, 2024", "May 10, 2024"],
      difficulty: "Easy",
      ageGroup: "Grades 6-12"
    },
    {
      id: 2,
      title: "Ancient Roman History Tour",
      category: "history",
      location: "Roman Forum & Colosseum",
      duration: "2 Days",
      groupSize: "20-30 students",
      price: "$120",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
      description: "Step back in time to explore the grandeur of ancient Rome through guided tours and interactive workshops.",
      highlights: ["Colosseum tour", "Forum exploration", "Archaeological workshop", "Roman culture immersion"],
      included: ["Accommodation", "Transportation", "Expert historian", "All meals", "Museum passes"],
      dates: ["Apr 5-6, 2024", "May 3-4, 2024", "Jun 7-8, 2024"],
      difficulty: "Moderate",
      ageGroup: "Grades 9-12"
    },
    {
      id: 3,
      title: "Space Science Center",
      category: "science",
      location: "National Space Museum",
      duration: "1 Day",
      groupSize: "25-35 students",
      price: "$35",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop&crop=center",
      description: "Discover the wonders of space through interactive exhibits, planetarium shows, and hands-on experiments.",
      highlights: ["Planetarium show", "Rocket science lab", "Astronaut training", "Space history"],
      included: ["Transportation", "Museum admission", "Workshop materials", "Lunch", "Souvenir"],
      dates: ["Mar 20, 2024", "Apr 17, 2024", "May 15, 2024"],
      difficulty: "Easy",
      ageGroup: "Grades 4-12"
    },
    {
      id: 4,
      title: "Indigenous Culture Experience",
      category: "culture",
      location: "Native Heritage Center",
      duration: "1 Day",
      groupSize: "15-25 students",
      price: "$40",
      rating: 4.9,
      reviews: 73,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop&crop=center",
      description: "Immerse yourself in indigenous culture through traditional crafts, storytelling, and cultural workshops.",
      highlights: ["Traditional crafts", "Cultural storytelling", "Music & dance", "Historical artifacts"],
      included: ["Transportation", "Cultural guide", "Craft materials", "Traditional lunch", "Cultural booklet"],
      dates: ["Mar 25, 2024", "Apr 22, 2024", "May 20, 2024"],
      difficulty: "Easy",
      ageGroup: "All ages"
    },
    {
      id: 5,
      title: "Mountain Ecology Adventure",
      category: "adventure",
      location: "Alpine National Park",
      duration: "2 Days",
      groupSize: "12-20 students",
      price: "$85",
      rating: 4.6,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      description: "Explore mountain ecosystems through hiking, wildlife observation, and environmental science activities.",
      highlights: ["Mountain hiking", "Wildlife tracking", "Ecology studies", "Camping experience"],
      included: ["Camping gear", "Transportation", "Expert guide", "All meals", "Safety equipment"],
      dates: ["Jun 15-16, 2024", "Jul 13-14, 2024", "Aug 10-11, 2024"],
      difficulty: "Moderate",
      ageGroup: "Grades 8-12"
    },
    {
      id: 6,
      title: "Industrial Revolution Museum",
      category: "history",
      location: "Industrial Heritage Complex",
      duration: "1 Day",
      groupSize: "20-30 students",
      price: "$30",
      rating: 4.5,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
      description: "Discover the impact of the Industrial Revolution through interactive exhibits and historical demonstrations.",
      highlights: ["Steam engine demo", "Textile workshop", "Historical reenactment", "Technology timeline"],
      included: ["Transportation", "Museum admission", "Workshop participation", "Lunch", "Educational packet"],
      dates: ["Mar 30, 2024", "Apr 27, 2024", "May 25, 2024"],
      difficulty: "Easy",
      ageGroup: "Grades 6-12"
    }
  ];

  const filteredExcursions = excursions.filter(excursion => {
    const matchesCategory = selectedCategory === 'all' || excursion.category === selectedCategory;
    const matchesSearch = excursion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         excursion.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         excursion.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
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
            Academic Excursions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on unforgettable educational journeys that bring learning to life through immersive experiences and real-world exploration.
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
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations, activities, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
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
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Excursions Grid */}
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
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="card overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={excursion.image}
                  alt={excursion.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(excursion.difficulty)}`}>
                    {excursion.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <MapPin className="w-4 h-4" />
                    <span>{excursion.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{excursion.rating}</span>
                    <span className="text-sm text-gray-500">({excursion.reviews})</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {excursion.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {excursion.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {excursion.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{excursion.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{excursion.groupSize}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{excursion.ageGroup}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Bus className="w-4 h-4" />
                    <span>Transport included</span>
                  </div>
                </div>

                {/* Available Dates */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Dates:</h4>
                  <div className="flex flex-wrap gap-2">
                    {excursion.dates.map((date, dateIndex) => (
                      <span
                        key={dateIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg border"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">
                    {excursion.price}
                    <span className="text-sm font-normal text-gray-500">/student</span>
                  </div>
                  <button className="btn-primary">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {filteredExcursions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="btn-outline px-8 py-3">
              View More Excursions
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredExcursions.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No excursions found</h3>
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
              View All Excursions
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Next Educational Adventure?
          </h2>
          <p className="text-xl mb-6 text-primary-100">
            Contact our team to customize an excursion that perfectly fits your curriculum and learning objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicExcursions;
