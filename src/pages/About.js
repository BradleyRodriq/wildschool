import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Building
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Educational Institutions Served", icon: Building },
    { number: "50+", label: "Expert Educators", icon: Users },
    { number: "100+", label: "Workshops Conducted", icon: BookOpen },
    { number: "25+", label: "Field Trip Locations", icon: Globe }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly explore new ways to make learning engaging, interactive, and memorable.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for education drives everything we do, ensuring every experience is meaningful.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of working together to create the best learning experiences.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in all our programs and services.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bio: "Former university professor with 15+ years in educational innovation and curriculum development.",
      expertise: ["Educational Leadership", "Curriculum Design", "Innovation Strategy"],
      education: "Ph.D. in Education, Stanford University"
    },
    {
      name: "Michael Chen",
      role: "Head of Programs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Experienced educator and program director specializing in experiential learning and outdoor education.",
      expertise: ["Program Development", "Experiential Learning", "Safety Management"],
      education: "M.Ed. in Curriculum & Instruction, Harvard University"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Director of Research",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Research scientist focused on educational psychology and learning outcomes measurement.",
      expertise: ["Educational Research", "Data Analysis", "Assessment Design"],
      education: "Ph.D. in Educational Psychology, UC Berkeley"
    },
    {
      name: "David Thompson",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Technology expert passionate about integrating digital tools into educational experiences.",
      expertise: ["EdTech Integration", "Digital Learning", "Platform Development"],
      education: "M.S. in Computer Science, MIT"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "National Education Innovation Award",
      description: "Recognized for outstanding contributions to experiential learning in K-12 education."
    },
    {
      year: "2023",
      title: "Best Educational Service Provider",
      description: "Awarded by the Association for Educational Excellence for our workshop programs."
    },
    {
      year: "2022",
      title: "Excellence in Safety Standards",
      description: "Received the highest safety certification for all our field trip and excursion programs."
    },
    {
      year: "2021",
      title: "Community Impact Award",
      description: "Honored for our contributions to underserved communities and schools."
    }
  ];

  const testimonials = [
    {
      name: "Principal Jennifer Williams",
      school: "Riverside Elementary School",
      content: "Wild School Experiences has transformed how our students learn. The workshops are engaging, educational, and perfectly aligned with our curriculum standards.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. Robert Kim",
      school: "Lincoln High School",
      content: "The academic excursions have provided our students with real-world learning opportunities that simply can't be replicated in the classroom.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      school: "Sunset Middle School",
      content: "Our teachers love the professional development workshops. They've learned new techniques that have significantly improved student engagement.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Wild School</span> Experiences
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              We're passionate about transforming education through immersive experiences, 
              expert-led workshops, and unforgettable academic adventures that inspire 
              lifelong learning.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-800 rounded-full text-lg font-medium">
              <BookOpen className="w-6 h-6 mr-2" />
              Founded in 2018 • Serving 500+ Schools
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To revolutionize education by creating immersive, hands-on learning experiences 
                that bridge the gap between classroom theory and real-world application. We believe 
                that the best learning happens when students can see, touch, and experience what 
                they're studying.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our carefully curated workshops, academic excursions, and educational 
                content, we empower educators and inspire students to become curious, engaged, 
                and passionate learners.
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
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop&crop=center"
                alt="Students in workshop"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of transformative educational experiences that 
                  prepare students for the challenges and opportunities of the 21st century.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-100 text-sm lg:text-base">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the experiences we create.
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of educators, researchers, and innovators are passionate about 
              creating exceptional learning experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center p-6 group hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-xs text-gray-500">{member.education}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading educational organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 border-l-4 border-primary-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-600 font-medium mb-1">{achievement.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Educators Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the educators and administrators who have experienced the Wild School difference.
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
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.school}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can create custom educational experiences for your students.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>info@wildschool.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>123 Education St</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
