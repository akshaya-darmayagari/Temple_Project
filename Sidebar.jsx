import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, ChevronRight, CalendarDays, Heart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Sidebar = ({ selectedDay, setSelectedDay, activeMenu, setActiveMenu }) => {
  const { toast } = useToast();
  
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const handlePostsClick = () => {
    setActiveMenu('posts');
    toast({
      title: "Posts",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const menuItems = [
    { id: 'posts', icon: FileText, label: 'Posts', action: handlePostsClick },
    { id: 'poojas', icon: Sparkles, label: 'Poojas', action: () => setActiveMenu('poojas') },
    { id: 'bookings', icon: CalendarDays, label: 'Bookings', action: () => setActiveMenu('bookings') },
    { id: 'donations', icon: Heart, label: 'Donations', action: () => setActiveMenu('donations') },
  ];

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-56 bg-gradient-to-b from-orange-100 to-amber-100 shadow-xl min-h-[calc(100vh-96px)] border-r-2 border-orange-300"
    >
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={item.action}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeMenu === item.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                  : 'bg-white text-orange-800 hover:bg-orange-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-semibold">{item.label}</span>
            </button>
          </motion.div>
        ))}

        {activeMenu === 'poojas' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 space-y-1 mt-2"
          >
            {weekdays.map((day) => (
              <motion.button
                key={day}
                onClick={() => setSelectedDay(day)}
                whileHover={{ x: 4 }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-300 ${
                  selectedDay === day
                    ? 'bg-white text-orange-700 shadow-sm font-semibold'
                    : 'text-orange-700 hover:bg-white/50'
                }`}
              >
                <span>{day}</span>
                {selectedDay === day && <ChevronRight className="w-4 h-4" />}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;