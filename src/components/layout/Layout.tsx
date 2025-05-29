import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from '../common/CookieConsent';

const Layout: React.FC = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented to cookies
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowCookieConsent(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={handleAcceptCookies} />
      )}
    </div>
  );
};

export default Layout;