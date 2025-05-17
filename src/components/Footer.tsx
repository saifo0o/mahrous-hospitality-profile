
import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-luxury-gold">I</span>slam <span className="text-luxury-gold">M</span>ahrous
            </h3>
            <p className="text-gray-300 mb-4">
              Hospitality Executive with over 30 years of progressive leadership experience specializing in pre-opening operations, renovations, and operational excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/islam-mahrous/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-luxury-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:mahrous.islam@yahoo.com" 
                className="text-gray-300 hover:text-luxury-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-luxury-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-luxury-gold transition-colors">About</Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-300 hover:text-luxury-gold transition-colors">Career</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-luxury-gold transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/awards" className="text-gray-300 hover:text-luxury-gold transition-colors">Awards</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-luxury-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-luxury-gold" />
                <span className="text-gray-300">Jubail, KSA</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-luxury-gold" />
                <a href="tel:+966501721876" className="text-gray-300 hover:text-luxury-gold transition-colors">+966 501 721 876</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-luxury-gold" />
                <a href="tel:+201095556779" className="text-gray-300 hover:text-luxury-gold transition-colors">+20 109 555 6779</a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-luxury-gold" />
                <a href="mailto:mahrous.islam@yahoo.com" className="text-gray-300 hover:text-luxury-gold transition-colors">mahrous.islam@yahoo.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Islam Mahrous. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
