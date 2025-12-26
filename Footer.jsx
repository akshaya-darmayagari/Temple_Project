import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white mt-auto"
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg block mb-1">Temple Location</span>
              <p className="text-orange-100 text-sm leading-relaxed">
                123 Divine Street, Sacred Lane<br />
                Holy City, State - 123456<br />
                Near Central Market Square
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg block mb-1">Contact Us</span>
              <p className="text-orange-100 text-sm leading-relaxed">
                +91 98765 43210<br />
                +91 98765 43211<br />
                Open Daily: 5:30 AM - 8:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg block mb-1">Email</span>
              <p className="text-orange-100 text-sm leading-relaxed">
                info@shriganeshtemple.org<br />
                poojas@shriganeshtemple.org
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-white/20 text-center">
          <p className="text-orange-100 text-sm">
            © 2025 Shri Ganesh Temple. All rights reserved. | Serving the community with devotion since 1950
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;