import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdminLogin = ({ onBack }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Access Denied",
        description: "Invalid credentials. Please contact the temple trust for access.",
        variant: "destructive",
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex-1 flex items-center justify-center p-4 min-h-[calc(100vh-80px)]"
    >
      <Card className="w-full max-w-md border-orange-200 shadow-2xl">
        <CardHeader className="space-y-1 bg-gradient-to-r from-orange-50 to-amber-50 rounded-t-lg border-b border-orange-100">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner border-2 border-orange-100">
              <ShieldCheck className="w-8 h-8 text-orange-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center text-orange-900">Temple Admin Portal</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the administrative dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="username" placeholder="admin" className="pl-9 border-orange-200 focus-visible:ring-orange-500" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-9 border-orange-200 focus-visible:ring-orange-500" required />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white mt-4"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="bg-gray-50 rounded-b-lg border-t border-gray-100 p-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="w-full text-gray-500 hover:text-gray-900 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Temple Website
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AdminLogin;