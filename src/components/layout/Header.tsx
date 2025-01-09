import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center h-24">
          {/* Left transparent section */}
          <div className="w-8 bg-transparent"></div>

          {/* Logo and Features section */}
          <div className="bg-white rounded-lg shadow-md px-8 py-2 w-[320px]">
            <div className="flex items-center justify-between gap-8">
              <Link to="/" className="flex items-center gap-2 group">
                <img 
                  src="/assets/data-asistant.png"
                  alt="TalkSphere" 
                  className="h-6 w-6 object-contain"
                />
                <span className="text-lg font-semibold text-text">
                  Talk<span className="text-primary">Sphere</span>
                </span>
              </Link>
              <div className="h-8 w-[1px] bg-gray-200"></div>
              <a 
                href="#features" 
                onClick={scrollToFeatures}
                className="text-gray-800 font-bold px-3 py-1 rounded-md transition-all duration-200 hover:bg-gray-100 cursor-pointer"
              >
                Özellikler
              </a>
            </div>
          </div>

          {/* Middle transparent section */}
          <div className="flex-1 bg-transparent"></div>

          {/* Solutions and About section */}
          <div className="bg-white rounded-lg shadow-md px-8 py-2 w-[420px]">
            <div className="flex items-center justify-between">
              <Link to="/solutions" className="text-gray-800 font-bold px-3 py-1 rounded-md transition-all duration-200 hover:bg-gray-200">
                Çözümler
              </Link>
              <Link to="/about" className="text-gray-800 font-bold px-3 py-1 rounded-md transition-all duration-200 hover:bg-gray-200">
                Hakkımızda
              </Link>
              <Link 
                to="/contact" 
                state={{ message: "Şirketinize özel fiyatlandırma için bize ulaşın." }}
                className="text-gray-800 font-bold px-3 py-1 rounded-md transition-all duration-200 hover:bg-gray-200"
              >
                Fiyatlandırma
              </Link>
            </div>
          </div>

          {/* Right transparent section */}
          <div className="w-8 bg-transparent"></div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/assets/data-asistant.png"
              alt="TalkSphere" 
              className="h-6 w-6 object-contain"
            />
            <span className="text-lg font-semibold text-text">
              Talk<span className="text-primary">Sphere</span>
            </span>
          </Link>

          <button 
            className="text-gray-800 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <a 
                href="#features"
                onClick={(e) => {
                  scrollToFeatures(e);
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-800 rounded-md transition-all duration-200 hover:bg-gray-100 cursor-pointer"
              >
                Özellikler
              </a>
              <Link 
                to="/solutions" 
                className="block px-3 py-2 text-gray-800 rounded-md transition-all duration-200 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Çözümler
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-800 rounded-md transition-all duration-200 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                to="/contact" 
                state={{ message: "Şirketinize özel fiyatlandırma için bize ulaşın." }}
                className="block px-3 py-2 text-gray-800 rounded-md transition-all duration-200 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Fiyatlandırma
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;