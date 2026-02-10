import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  MapPin, 
  Users, 
  Award, 
  Play, 
  ArrowRight,
  Star,
  Calendar,
  Globe,
  Lightbulb,
  GraduationCap,
  TreePine,
  Heart,
  FileText
} from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const Home = () => {
  const t = useTranslations();
  
  const features = [
    {
      icon: GraduationCap,
      title: t.home.features.educationalPrograms.title,
      description: t.home.features.educationalPrograms.description,
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: TreePine,
      title: t.home.features.ecoturisticExcursions.title,
      description: t.home.features.ecoturisticExcursions.description,
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Heart,
      title: t.home.features.volunteering.title,
      description: t.home.features.volunteering.description,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FileText,
      title: t.home.features.educationalResources.title,
      description: t.home.features.educationalResources.description,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "500+", label: t.common.studentsEnrolled },
    { number: "50+", label: t.common.expertEducators },
    { number: "100+", label: t.common.excursionsConducted },
    { number: "25+", label: t.common.fieldTripLocations }
  ];

  const testimonials = [
    {
      name: t.home.testimonials.sarah.name,
      role: t.home.testimonials.sarah.role,
      content: t.home.testimonials.sarah.content,
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: t.home.testimonials.michael.name,
      role: t.home.testimonials.michael.role,
      content: t.home.testimonials.michael.content,
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: t.home.testimonials.emily.name,
      role: t.home.testimonials.emily.role,
      content: t.home.testimonials.emily.content,
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section aria-label="Introduction" className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 500+ Educational Institutions
              </div> */}
              
                <h1 className="text-2xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-gradient">{t.home.hero.title}</span>{' '}
                  
                </h1>
                <span className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300">{t.home.hero.subtitle}</span>
              
                              <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/what-we-offer" className="btn-primary text-lg px-8 py-4">
                    {t.home.hero.bookExcursion}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  {/* <Link to="/educational-talks" className="btn-outline text-lg px-8 py-4">
                    Join Our Talks
                  </Link> */}
                </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&crop=center"
                  alt="Students learning outdoors in a natural setting"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{t.home.hero.learnAboutUs}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t.home.hero.videoDuration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.home.features.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.home.features.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.home.gallery.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.home.gallery.description}
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            {/* Carousel Container */}
            <div className="flex animate-scroll">
              {/* First set of images */}
              <div className="flex space-x-6 min-w-max">
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center"
                    alt="Students learning outdoors"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center"
                    alt="Educational talk session"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
                    alt="Academic excursion in nature"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop&crop=center"
                    alt="Citizen science research"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
                    alt="Volunteering and conservation"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-6 min-w-max">
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center"
                    alt="Students learning outdoors"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center"
                    alt="Educational talk session"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
                    alt="Academic excursion in nature"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop&crop=center"
                    alt="Citizen science research"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
                    alt="Volunteering and conservation"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.home.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.home.testimonials.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              {t.home.cta.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t.home.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/what-we-offer" className="btn-primary text-lg px-8 py-4">
                {t.home.cta.bookExcursion}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/about" className="btn-outline text-lg px-8 py-4">
                {t.home.cta.learnMore}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
