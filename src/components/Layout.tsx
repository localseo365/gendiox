import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <WhatsAppButton />
      <ScrollToTop />
      <CookieBanner />
      <Footer />
    </div>
  );
}