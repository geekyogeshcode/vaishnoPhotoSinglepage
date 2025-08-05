import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Footer: React.FC = () => {
  const { scrollToSection } = useScrollToSection();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Services', id: 'services' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@vaishnofilms.com', label: 'Email' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-4"
            >
              <Camera className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold font-poppins">Vaishno Films</span>
            </motion.div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Capturing life's beautiful moments with artistic excellence and professional precision.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Wedding Photography</li>
              <li>Portrait Sessions</li>
              <li>Event Photography</li>
              <li>Corporate Headshots</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-amber-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-amber-500" />
                <span>hello@vaishnofilms.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 Vaishno Films Photography. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-amber-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;