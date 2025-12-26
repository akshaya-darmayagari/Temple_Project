import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const PoojaTimings = ({ timings }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl shadow-xl p-6 text-white"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <Clock className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold">Pooja Timings</h3>
      </div>
      <div className="space-y-3">
        {timings.map((timing, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
          >
            <p className="font-semibold text-lg">{timing}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PoojaTimings;