import React from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from '@/components/ImageCarousel';
import PoojaTimings from '@/components/PoojaTimings';
import TempleDescription from '@/components/TempleDescription';

const poojaData = {
  Monday: {
    name: 'Rudrabhishek Pooja',
    timings: ['6:00 AM - 7:00 AM', '12:00 PM - 1:00 PM', '6:00 PM - 7:00 PM'],
    description: 'Special worship of Lord Shiva with sacred abhishekam using milk, honey, and holy water.',
  },
  Tuesday: {
    name: 'Hanuman Pooja',
    timings: ['5:30 AM - 6:30 AM', '12:00 PM - 1:00 PM', '7:00 PM - 8:00 PM'],
    description: 'Devotional worship of Lord Hanuman with special prayers and offerings of sindoor and flowers.',
  },
  Wednesday: {
    name: 'Ganesh Pooja',
    timings: ['6:00 AM - 7:00 AM', '11:00 AM - 12:00 PM', '6:30 PM - 7:30 PM'],
    description: 'Auspicious worship of Lord Ganesha, the remover of obstacles, with modak offerings and sacred chants.',
  },
  Thursday: {
    name: 'Lakshmi Pooja',
    timings: ['6:00 AM - 7:00 AM', '12:00 PM - 1:00 PM', '7:00 PM - 8:00 PM'],
    description: 'Divine worship of Goddess Lakshmi for prosperity, wealth, and abundance with special rituals.',
  },
  Friday: {
    name: 'Durga Pooja',
    timings: ['5:30 AM - 6:30 AM', '12:00 PM - 1:00 PM', '6:00 PM - 7:00 PM'],
    description: 'Sacred worship of Goddess Durga, the divine mother, with special bhajans and aarti.',
  },
  Saturday: {
    name: 'Shani Pooja',
    timings: ['6:00 AM - 7:00 AM', '12:00 PM - 1:00 PM', '6:00 PM - 7:00 PM'],
    description: 'Devotional worship of Lord Shani to seek blessings and remove obstacles from life.',
  },
};

const MainContent = ({ selectedDay, activeMenu }) => {
  if (activeMenu !== 'poojas') {
    return null;
  }

  const currentPooja = poojaData[selectedDay];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-6 lg:p-8"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-orange-800 mb-2 flex items-center gap-3">
            <span className="text-4xl">🙏</span>
            {currentPooja.name}
          </h2>
          <p className="text-orange-600 font-medium">{selectedDay} Pooja Schedule</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <ImageCarousel selectedDay={selectedDay} />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <PoojaTimings timings={currentPooja.timings} />
            <TempleDescription description={currentPooja.description} />
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default MainContent;