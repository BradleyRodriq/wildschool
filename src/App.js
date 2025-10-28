import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EducationalContent from './pages/EducationalContent';
import AcademicExcursions from './pages/AcademicExcursions';
import BookWorkshop from './pages/BookWorkshop';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen gradient-bg">
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/educational-content" element={<EducationalContent />} />
                <Route path="/academic-excursions" element={<AcademicExcursions />} />
                <Route path="/book-workshop" element={<BookWorkshop />} />
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
