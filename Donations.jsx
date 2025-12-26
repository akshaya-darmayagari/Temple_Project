import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Wallet, Building, Gift } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Donations = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    toast({
      title: "Thank You for Your Generosity! 🙏",
      description: "Your donation helps us maintain the temple and serve the community.",
      duration: 5000,
    });
  };

  const presetAmounts = ['101', '501', '1001', '2501', '5001'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-6 lg:p-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-orange-800 flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 fill-red-500 text-red-500" />
            Make a Donation
          </h2>
          <p className="text-orange-600 mt-2 max-w-2xl mx-auto">
            "The act of giving is the act of receiving." Support our temple's activities, annadanam, and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Donation Form */}
          <div className="md:col-span-2">
            <Card className="border-orange-200 shadow-lg h-full">
              <CardHeader className="bg-orange-50 rounded-t-lg border-b border-orange-100">
                <CardTitle className="text-xl text-orange-800">Donation Details</CardTitle>
                <CardDescription>Secure payment gateway for your contributions.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleDonate} className="space-y-6">
                  <div className="space-y-4">
                    <Label>Select Amount (₹)</Label>
                    <div className="flex flex-wrap gap-3">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setSelectedAmount(amount)}
                          className={`px-4 py-2 rounded-full border transition-all ${
                            selectedAmount === amount
                              ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                              : 'bg-white text-orange-700 border-orange-200 hover:bg-orange-50'
                          }`}
                        >
                          ₹{amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Custom Amount</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-orange-500 font-bold">₹</span>
                      <Input 
                        id="amount" 
                        type="number" 
                        value={selectedAmount}
                        onChange={(e) => setSelectedAmount(e.target.value)}
                        placeholder="Enter amount" 
                        className="pl-8 border-orange-200 focus-visible:ring-orange-500 text-lg font-semibold" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purpose">Donation Purpose</Label>
                    <select 
                      id="purpose"
                      className="flex h-10 w-full rounded-md border border-orange-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      required
                    >
                      <option value="general">General Temple Fund</option>
                      <option value="annadanam">Annadanam (Free Food)</option>
                      <option value="construction">Temple Renovation & Construction</option>
                      <option value="education">Vedic Education Support</option>
                      <option value="festivals">Festival Celebrations</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="donor-name">Name</Label>
                      <Input id="donor-name" placeholder="Donor's Name" className="border-orange-200 focus-visible:ring-orange-500" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN Number (Optional)</Label>
                      <Input id="pan" placeholder="For tax exemption" className="border-orange-200 focus-visible:ring-orange-500" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Payment Method</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-orange-50 border-orange-200">
                        <input type="radio" name="payment" id="card" className="accent-orange-600" defaultChecked />
                        <CreditCard className="w-5 h-5 text-orange-600" />
                        <label htmlFor="card" className="cursor-pointer text-sm font-medium">Credit/Debit Card</label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-orange-50 border-orange-200">
                        <input type="radio" name="payment" id="upi" className="accent-orange-600" />
                        <Wallet className="w-5 h-5 text-orange-600" />
                        <label htmlFor="upi" className="cursor-pointer text-sm font-medium">UPI / GPay</label>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-md text-lg h-12">
                    Donate Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Impact Info */}
          <div className="space-y-6">
            <Card className="bg-orange-600 text-white border-none shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Tax Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-50 text-sm">
                  Donations above ₹500 are eligible for 50% tax exemption under section 80G of the Income Tax Act.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Current Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-orange-900">
                    <span>New Community Hall</span>
                    <span>75% Funded</span>
                  </div>
                  <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-3/4 rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-orange-900">
                    <span>Annadanam Fund</span>
                    <span>40% Monthly Goal</span>
                  </div>
                  <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-2/5 rounded-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Donations;