import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white safe-area-bottom" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Wild School</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Conservation-focused academic excursions and talks in Puerto Rico. Introducing students to nature through citizen science.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2" role="list">
              <li>
                <Link to="/" className="inline-block py-2 text-gray-300 hover:text-primary-400 transition-colors text-sm rounded focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/what-we-offer" className="inline-block py-2 text-gray-300 hover:text-primary-400 transition-colors text-sm rounded focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none">
                  What We Offer
                </Link>
              </li>
              <li>
                <Link to="/blog" className="inline-block py-2 text-gray-300 hover:text-primary-400 transition-colors text-sm rounded focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block py-2 text-gray-300 hover:text-primary-400 transition-colors text-sm rounded focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block py-2 text-gray-300 hover:text-primary-400 transition-colors text-sm rounded focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Our Services</h2>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">El Yunque & Rainforest</li>
              <li className="text-gray-300 text-sm">Beach & Marine</li>
              <li className="text-gray-300 text-sm">Coffee & Culture</li>
              <li className="text-gray-300 text-sm">Birdwatching</li>
              <li className="text-gray-300 text-sm">Conservation Talks</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">info@wildschool.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Wild School Experiences. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="py-2 text-gray-400 hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none rounded">
                Privacy Policy
              </a>
              <a href="#" className="py-2 text-gray-400 hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none rounded">
                Terms of Service
              </a>
              <a href="#" className="py-2 text-gray-400 hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:outline-none rounded">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
