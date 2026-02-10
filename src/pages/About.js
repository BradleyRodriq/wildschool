import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Heart,
  Mail,
  Phone,
  MapPin,
  Leaf,
  Beaker,
  Users,
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Conservation',
      description: 'We focus on protecting nature and teaching the next generation why it matters.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Beaker,
      title: 'Citizen Science',
      description: 'Students contribute to real research and discovery through our excursions and talks.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Nature-Based Learning',
      description: 'We introduce students to the natural world through hands-on experiences in Puerto Rico.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We work with schools and groups to build lasting connections between people and place.',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const team = [
    {
      name: 'Sandra Schleier',
      role: 'Founder & Lead Educator',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
      bio: 'Sandra leads Wild School Experience with a passion for marine biology and conservation. She holds a Master\'s in Marine Biology and designs excursions and talks that connect students to nature through citizen science and hands-on learning in Puerto Rico.',
      expertise: ['Marine Biology', 'Conservation', 'Citizen Science', 'Environmental Education'],
      education: 'M.S. Marine Biology',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-gradient">Wild School</span> Experience
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              A conservation-focused academic excursions company in Puerto Rico, introducing students to nature through citizen science and hands-on learning.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-lg font-medium">
              <Leaf className="w-6 h-6 mr-2" />
              Conservation • Citizen Science • Puerto Rico
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Wild School Experience exists to introduce students to nature and conservation through academic excursions and educational talks in Puerto Rico. We believe in learning by doing: citizen science, exploration, and stewardship so that the next generation cares for the environment.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From El Yunque to the coast, from marine life to recycling and plastic awareness, we connect curriculum to the real world and inspire a lasting connection to the island’s ecosystems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?w=500&h=400&fit=crop&crop=center"
                alt="Tropical nature in Puerto Rico"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  To become a leading conservation-focused company that brings students into nature through citizen science and unforgettable experiences in Puerto Rico.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Conservation, citizen science, and nature-based learning guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet the Founder
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Wild School Experience is led by Sandra Schleier, marine biologist and educator.
            </p>
          </motion.div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center p-8 max-w-lg group hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 object-cover"
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Focus areas</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500">{member.education}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Ready to Bring Your Students Into Nature?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Book an excursion in Puerto Rico or request a talk on marine life, conservation, or citizen science.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
              <a href="mailto:info@wildschoolexperience.com" className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@wildschoolexperience.com</span>
              </a>
              <a href="tel:+17871234567" className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (787) 123-4567</span>
              </a>
              <span className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Puerto Rico</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/what-we-offer" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                What We Offer
                <BookOpen className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4 inline-flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
