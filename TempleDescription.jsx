import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const TempleDescription = ({ description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-xl p-6 border-2 border-orange-200"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
          <Info className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-orange-800">About This Pooja</h3>
      </div>
      <p className="text-orange-900 leading-relaxed">{description}</p>
      
      <div className="mt-4 pt-4 border-t-2 border-orange-100">
        <p className="text-sm text-orange-700 font-medium">
          ✨ All are welcome to participate in the divine worship
        </p>
      </div>
    </motion.div>
  );
};

export default TempleDescription;