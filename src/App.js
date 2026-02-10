import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AcademicExcursions from './pages/AcademicExcursions';
import BookExcursion from './pages/BookExcursion';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen gradient-bg relative">
            <Navbar />
            <main id="main-content" className="main-below-nav pb-8 safe-area-bottom" tabIndex={-1}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/what-we-offer" element={<AcademicExcursions />} />
                <Route path="/academic-excursions" element={<Navigate to="/what-we-offer" replace />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/educational-content" element={<Navigate to="/blog" replace />} />
                <Route path="/book" element={<BookExcursion />} />
                <Route path="/book/:excursionId" element={<BookExcursion />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
