import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImageCarousel = ({ selectedDay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { 
      url: 'https://horizons-cdn.hostinger.com/be7e01d4-553a-4e31-8cd5-ebec4d62bb3b/1d214ae3ff6c21e3189cf226f0c4b84e.jpg',
      alt: 'Jagannath Temple', 
      title: 'Jagannath Temple, Puri',
      description: 'The majestic Jagannath Temple in Puri is a sacred Hindu temple dedicated to Jagannath, a form of Vishnu. Famous for its annual Ratha Yatra, or chariot festival.'
    },
    { 
      url: 'https://horizons-cdn.hostinger.com/be7e01d4-553a-4e31-8cd5-ebec4d62bb3b/2f48a56ecb70679d7f1c79fac338732e.jpg',
      alt: 'Colorful South Indian Gopuram', 
      title: 'South Indian Temple Architecture',
      description: 'A vibrant and towering Gopuram, characteristic of Dravidian architecture. These monumental entrance towers are adorned with intricate sculptures of gods, goddesses, and mythical creatures.'
    },
    { 
      url: 'https://horizons-cdn.hostinger.com/be7e01d4-553a-4e31-8cd5-ebec4d62bb3b/83bb77e91331859abc8844ba38b7d73b.jpg',
      alt: 'Golden Khajuraho Temple', 
      title: 'Khajuraho Group of Monuments',
      description: 'The magnificent Kandariya Mahadeva Temple at Khajuraho, renowned for its nagara-style architectural symbolism and erotic sculptures, glowing in the golden hues of sunset.'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border-4 border-orange-200">
      <div className="aspect-video relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img 
              className="w-full h-full object-cover" 
              alt={images[currentIndex].alt}
              src={images[currentIndex].url} 
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        <Button
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-orange-600 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          onClick={nextSlide}
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-orange-600 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      
        {/* Navigation Dots within image area */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${
                index === currentIndex
                  ? 'bg-orange-500 w-8'
                  : 'bg-white/80 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description Box Below Image */}
      <motion.div 
        key={`desc-${currentIndex}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 bg-orange-50 border-t border-orange-100"
      >
        <h3 className="text-xl font-bold text-orange-900 mb-2">{images[currentIndex].title}</h3>
        <p className="text-orange-800 leading-relaxed">
          {images[currentIndex].description}
        </p>
      </motion.div>
    </div>
  );
};

export default ImageCarousel;