import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AreasAtuacao from './components/AreasAtuacao';
import EndocrinologiaIntegrada from './components/EndocrinologiaIntegrada';
import TireoideFoco from './components/TireoideFoco';
import Faq from './components/Faq';
import DoctorProfile from './components/DoctorProfile';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-obsidian text-white flex flex-col selection:bg-gold-primary selection:text-black">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />
        <AreasAtuacao />
        <EndocrinologiaIntegrada onOpenBooking={handleOpenBooking} />
        <TireoideFoco onOpenBooking={handleOpenBooking} />
        <Faq />
        <DoctorProfile onOpenBooking={handleOpenBooking} />
        <CtaBanner onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal isOpen={isModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}
