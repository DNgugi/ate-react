import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200"
    >
      <div className="container-custom py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="pr-8">
            <p className="text-sm text-gray-600">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
              <Link to="/cookie-policy" className="text-primary-600 hover:text-primary-700 underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center mt-4 sm:mt-0">
            <button
              onClick={onAccept}
              className="btn-primary text-xs px-4 py-2"
            >
              Accept
            </button>
            <button
              onClick={onAccept}
              className="ml-2 text-gray-400 hover:text-gray-500"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;