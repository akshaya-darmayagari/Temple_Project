import React from 'react';
import { motion } from 'framer-motion';
import { Phone, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = ({ setActiveMenu }) => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "Contact Information",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleLogin = () => {
    if (setActiveMenu) {
      setActiveMenu('admin');
    } else {
      console.warn('setActiveMenu not provided to Header');
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveMenu && setActiveMenu('poojas')}
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-3xl">🕉️</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">Shri Ganesh Temple</h1>
              <p className="text-xs text-orange-100">Divine Blessings & Sacred Worship</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Button
              onClick={handleContact}
              variant="ghost"
              className="text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </Button>
            <Button
              onClick={handleLogin}
              className="bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 flex items-center gap-2 shadow-md"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Admin Login</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;