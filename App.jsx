import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import Bookings from '@/components/Bookings';
import Donations from '@/components/Donations';
import AdminLogin from '@/components/AdminLogin';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [activeMenu, setActiveMenu] = useState('poojas');

  return (
    <>
      <Helmet>
        <title>Shri Ganesh Temple - Divine Worship & Poojas</title>
        <meta name="description" content="Visit Shri Ganesh Temple for daily poojas, special worship ceremonies, and spiritual blessings. Explore our weekly pooja schedule and temple services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex flex-col">
        <Header setActiveMenu={setActiveMenu} />
        
        {activeMenu === 'admin' ? (
          <AdminLogin onBack={() => setActiveMenu('poojas')} />
        ) : (
          <div className="flex flex-1">
            <Sidebar 
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <div className="flex-1 flex flex-col min-h-[calc(100vh-96px)]">
              <MainContent 
                selectedDay={selectedDay}
                activeMenu={activeMenu}
              />
              {activeMenu === 'bookings' && <Bookings />}
              {activeMenu === 'donations' && <Donations />}
              <Footer />
            </div>
          </div>
        )}
        <Toaster />
      </div>
    </>
  );
}

export default App;