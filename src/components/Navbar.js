import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Package, FileText, Home, Info } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const t = useTranslations();

  const navigation = [
    { name: t.nav.home, href: '/', icon: Home },
    { name: t.nav.whatWeOffer, href: '/what-we-offer', icon: Package },
    { name: t.nav.blog, href: '/blog', icon: FileText },
    { name: t.nav.about, href: '/about', icon: Info },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 flex-shrink-0 rounded-lg focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none py-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center" aria-hidden="true">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Wild School Experience</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 ml-8 flex-1 justify-center" role="menubar" aria-label="Primary">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  role="menuitem"
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 min-h-[44px] ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Theme and Language Toggles */}
          <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
            <ThemeToggle />
            <LanguageToggle />
            <Link
              to="/contact"
              className="btn-primary"
            >
              {t.nav.contactUs}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto flex items-center min-h-[44px]">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden" role="dialog" aria-label="Mobile menu">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors min-h-[44px] ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-4 space-y-3 border-t border-gray-200 dark:border-gray-700 mt-2">
              <div className="flex items-center justify-center gap-2 pt-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <Link
                to="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contactUs}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
