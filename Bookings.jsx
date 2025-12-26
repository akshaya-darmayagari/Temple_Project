import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, User, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Bookings = () => {
  const { toast } = useToast();

  const handleBooking = (e) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received! 🙏",
      description: "We have received your pooja booking request. A priest will contact you shortly to confirm.",
      duration: 5000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-6 lg:p-8"
    >
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-orange-800 flex items-center gap-3">
            <CalendarDays className="w-8 h-8" />
            Book a Pooja
          </h2>
          <p className="text-orange-600 mt-2">Schedule a divine ceremony for you and your family.</p>
        </div>

        <Card className="border-orange-200 shadow-lg">
          <CardHeader className="bg-orange-50 rounded-t-lg border-b border-orange-100">
            <CardTitle className="text-xl text-orange-800">Booking Details</CardTitle>
            <CardDescription>Please fill in the details below to request a booking.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Devotee Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-orange-400" />
                    <Input id="name" placeholder="Enter your full name" className="pl-9 border-orange-200 focus-visible:ring-orange-500" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-orange-400" />
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" className="pl-9 border-orange-200 focus-visible:ring-orange-500" required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pooja-type">Select Pooja</Label>
                <select 
                  id="pooja-type"
                  className="flex h-10 w-full rounded-md border border-orange-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a sacred ceremony...</option>
                  <option value="rudrabhishek">Rudrabhishek Pooja</option>
                  <option value="hanuman">Hanuman Pooja</option>
                  <option value="ganesh">Ganesh Pooja</option>
                  <option value="lakshmi">Lakshmi Pooja</option>
                  <option value="durga">Durga Pooja</option>
                  <option value="shani">Shani Pooja</option>
                  <option value="vehicle">Vehicle Pooja</option>
                  <option value="satyanarayan">Satyanarayan Katha</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <div className="relative">
                    <Input id="date" type="date" className="border-orange-200 focus-visible:ring-orange-500" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 h-4 w-4 text-orange-400" />
                    <select 
                      id="time"
                      className="flex h-10 w-full rounded-md border border-orange-200 bg-background pl-9 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select time...</option>
                      <option value="morning">Morning (6 AM - 9 AM)</option>
                      <option value="noon">Noon (11 AM - 1 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests (Optional)</Label>
                <textarea 
                  id="notes" 
                  className="flex min-h-[80px] w-full rounded-md border border-orange-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Any specific requirements regarding the pooja..."
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-md">
                Request Booking
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default Bookings;