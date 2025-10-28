import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Star, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Video,
  Users as UsersIcon,
  Award,
  FileText,
  Play,
  Building,
  Globe
} from 'lucide-react';

const BookWorkshop = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    groupSize: '',
    preferredDate: '',
    preferredTime: '',
    specialRequirements: '',
    subject: '',
    gradeLevel: '',
    duration: ''
  });

  const workshops = [
    {
      id: 1,
      title: "Interactive Science Workshop",
      category: "Science",
      duration: "2-3 hours",
      groupSize: "15-30 students",
      price: "$25/student",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop&crop=center",
      description: "Hands-on experiments and demonstrations covering physics, chemistry, and biology concepts.",
      highlights: ["Lab safety training", "Experiment kits", "Take-home materials", "Certification"],
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Digital Art & Design",
      category: "Arts",
      duration: "3-4 hours",
      groupSize: "10-25 students",
      price: "$30/student",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop&crop=center",
      description: "Learn digital design principles using modern software and creative techniques.",
      highlights: ["Software licenses", "Design projects", "Portfolio building", "Industry insights"],
      icon: Video,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Mathematics Problem Solving",
      category: "Mathematics",
      duration: "2-3 hours",
      groupSize: "20-35 students",
      price: "$20/student",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop&crop=center",
      description: "Advanced problem-solving strategies and mathematical thinking development.",
      highlights: ["Problem sets", "Group collaboration", "Critical thinking", "Math games"],
      icon: UsersIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Environmental Science",
      category: "Science",
      duration: "2-4 hours",
      groupSize: "15-30 students",
      price: "$28/student",
      rating: 4.9,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
      description: "Explore environmental concepts through field studies and hands-on activities.",
      highlights: ["Field equipment", "Data collection", "Analysis tools", "Conservation projects"],
      icon: Globe,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      title: "Creative Writing Workshop",
      category: "Language Arts",
      duration: "2-3 hours",
      groupSize: "12-25 students",
      price: "$22/student",
      rating: 4.6,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
      description: "Develop creative writing skills through guided exercises and peer feedback.",
      highlights: ["Writing prompts", "Peer review", "Publishing guide", "Author visit"],
      icon: FileText,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Technology & Coding",
      category: "Technology",
      duration: "3-4 hours",
      groupSize: "15-25 students",
      price: "$35/student",
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop&crop=center",
      description: "Introduction to programming concepts and hands-on coding projects.",
      highlights: ["Computer access", "Coding projects", "Take-home code", "Career guidance"],
      icon: Building,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const timeSlots = [
    "9:00 AM - 12:00 PM",
    "1:00 PM - 4:00 PM",
    "9:00 AM - 2:00 PM (Full Day)",
    "Custom Time"
  ];

  const gradeLevels = [
    "Pre-K to Kindergarten",
    "Grades 1-3",
    "Grades 4-6",
    "Grades 7-8",
    "Grades 9-12",
    "College/University",
    "Adult Education"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWorkshopSelect = (workshop) => {
    setSelectedWorkshop(workshop);
    setFormData(prev => ({
      ...prev,
      subject: workshop.category,
      duration: workshop.duration
    }));
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { selectedWorkshop, formData });
    setCurrentStep(4); // Show success
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
            currentStep >= step 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-200 text-gray-600'
          }`}>
            {step}
          </div>
          {step < 3 && (
            <div className={`w-16 h-1 mx-2 ${
              currentStep > step ? 'bg-primary-600' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Workshop
        </h2>
        <p className="text-xl text-gray-600">
          Select from our curated collection of educational workshops designed to inspire and engage students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop) => {
          const Icon = workshop.icon;
          return (
            <motion.div
              key={workshop.id}
              whileHover={{ y: -5 }}
              className="card cursor-pointer group hover:shadow-xl transition-all duration-300"
              onClick={() => handleWorkshopSelect(workshop)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${workshop.color} rounded-full flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                    {workshop.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{workshop.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {workshop.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {workshop.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{workshop.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">{workshop.price}</span>
                  <button className="btn-primary text-sm">
                    Select Workshop
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Workshop Details
        </h2>
        <p className="text-xl text-gray-600">
          Tell us about your group and preferences to customize your workshop experience.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6 p-4 bg-primary-50 rounded-lg">
          <h3 className="font-semibold text-primary-900 mb-2">Selected Workshop</h3>
          <div className="flex items-center space-x-3">
            <img
              src={selectedWorkshop.image}
              alt={selectedWorkshop.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{selectedWorkshop.title}</h4>
              <p className="text-sm text-gray-600">{selectedWorkshop.category} • {selectedWorkshop.duration}</p>
              <p className="text-sm text-primary-600 font-medium">{selectedWorkshop.price}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization/School *
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="School or organization name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Group Size *
              </label>
              <select
                name="groupSize"
                value={formData.groupSize}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select group size</option>
                <option value="1-10">1-10 students</option>
                <option value="11-20">11-20 students</option>
                <option value="21-30">21-30 students</option>
                <option value="31-40">31-40 students</option>
                <option value="40+">40+ students</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grade Level *
              </label>
              <select
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select grade level</option>
                {gradeLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time *
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requirements or Notes
            </label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Any special accommodations, learning objectives, or specific topics you'd like covered..."
            />
          </div>

          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={handleBack}
              className="btn-outline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Review & Submit
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Booking Submitted Successfully!
        </h2>
        
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your workshop booking request. Our team will review your details and contact you within 24 hours to confirm and discuss next steps.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Workshop:</span>
              <span className="font-medium">{selectedWorkshop.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{formData.preferredDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{formData.preferredTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Group Size:</span>
              <span className="font-medium">{formData.groupSize}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Contact:</span>
              <span className="font-medium">{formData.name}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            A confirmation email has been sent to <span className="font-medium">{formData.email}</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setCurrentStep(1);
                setSelectedWorkshop(null);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  organization: '',
                  groupSize: '',
                  preferredDate: '',
                  preferredTime: '',
                  specialRequirements: '',
                  subject: '',
                  gradeLevel: '',
                  duration: ''
                });
              }}
              className="btn-primary"
            >
              Book Another Workshop
            </button>
            <button className="btn-outline">
              View All Workshops
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderStepIndicator()}
        
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>
    </div>
  );
};

export default BookWorkshop;
