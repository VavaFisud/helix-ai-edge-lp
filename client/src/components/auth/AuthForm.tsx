import { useState, FormEvent, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useLocation } from 'react-router-dom';

import { Eye, EyeOff, ArrowLeft } from 'lucide-react'; 
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import ForexLogos from './ForexLogos';

export default function AuthForm() { // Renamed to avoid conflict, will be primary component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const formType = queryParams.get('form');
    if (formType === 'signin') {
      setIsSignUp(false);
    } else {
      setIsSignUp(true); 
    }
  }, [location.search]);

  const handleAuth = async (event: FormEvent) => {
    event.preventDefault();
    if (isSignUp && !agreeTerms) {
      toast({
        title: 'Error',
        description: 'Please agree to the Terms & Privacy policy.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    try {
      let error = null;
      if (isSignUp) {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: name,
            },
          },
        });
        error = signUpError;
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        error = signInError;
      }

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Success',
          description: isSignUp ? 'Account created successfully!' : 'Signed in successfully!',
        });
        navigate('/dashboard');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        }
      });
      
      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to authenticate with Google.',
        variant: 'destructive',
      });
    }
  };

  const handleAppleAuth = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });
      
      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to authenticate with Apple.',
        variant: 'destructive',
      });
    }
  };

  const toggleFormType = () => {
    const newFormType = isSignUp ? 'signin' : 'signup';
    navigate(`/auth?form=${newFormType}`);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-2 sm:p-4 font-sans text-slate-100">
      <button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 z-10 flex items-center justify-center w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500"
        aria-label="Retour à la page d'accueil"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>
      
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-slate-800 shadow-2xl rounded-2xl overflow-hidden ring-1 ring-slate-700">
        <div className="w-full md:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center mb-4 hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src="/lovable-uploads/fcc2c656-66bd-402c-a0c7-67f47ff18ea6.png" 
                alt="Helix Terminal Logo" 
                className="w-6 h-6 mr-2"
              />
              <span className="text-lg font-bold text-slate-100">Helix</span>
            </button>
            <h1 className="text-2xl font-bold text-slate-100 mb-2">
              {isSignUp ? 'Get Started Now' : 'Welcome Back'}
            </h1>
            <p className="text-slate-400 mb-4 text-sm">
              {isSignUp ? 'Enter your credentials to access your account' : 'Enter your credentials to access your account'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <Button 
              onClick={handleGoogleAuth}
              type="button"
              className="w-full flex items-center justify-center py-2 bg-slate-700 text-slate-200 hover:bg-slate-600 text-xs rounded-lg font-medium transition-all duration-200 border border-slate-600"
            >
              <FcGoogle className="mr-1" size={16}/> Google
            </Button>
            <Button 
              onClick={handleAppleAuth}
              type="button"
              className="w-full flex items-center justify-center py-2 bg-slate-700 text-slate-200 hover:bg-slate-600 text-xs rounded-lg font-medium transition-all duration-200 border border-slate-600"
            >
              <FaApple className="mr-1" size={16}/> Apple
            </Button>
          </div>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-slate-600"/>
            <span className="mx-3 text-slate-500 text-xs font-medium uppercase">or</span>
            <hr className="flex-grow border-slate-600"/>
          </div>

          <form onSubmit={handleAuth} className="space-y-3">
            {isSignUp && (
              <div>
                {/* Label text color for dark mode */}
                <Label htmlFor="name" className="text-slate-300 font-medium text-sm mb-1 block">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Rafique Rahman"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-slate-100 placeholder-slate-400 text-sm transition-all duration-200"
                />
              </div>
            )}

            <div>
              {/* Label text color for dark mode */}
              <Label htmlFor="email" className="text-slate-300 font-medium text-sm mb-1 block">Email address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="rafique51@company.com"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-slate-100 placeholder-slate-400 text-sm transition-all duration-200"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <Label htmlFor="password" className="text-slate-300 font-medium text-sm">Password</Label>
                {!isSignUp && (
                  <a href="#" onClick={(e) => {e.preventDefault(); toast({title: 'Feature Coming Soon', description: 'Password recovery will be available soon.'})}} className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors duration-150">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="min 8 chars"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg py-2 px-3 pr-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-slate-100 placeholder-slate-400 text-sm transition-all duration-200"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  // Eye icon color for dark mode
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors duration-150"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div className="flex items-center pt-1">
                <Input 
                  type="checkbox" 
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  // Checkbox styling for dark mode
                  className="h-4 w-4 text-blue-500 border-slate-500 focus:ring-blue-400 rounded mr-2 cursor-pointer bg-slate-700 focus:ring-offset-slate-800"
                />
                {/* Label text color for dark mode, link color for dark mode */}
                <Label htmlFor="terms" className="text-sm text-slate-400 cursor-pointer">
                  I agree to the <a href="/terms" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-150">Terms</a> & <a href="/privacy" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-150">Privacy</a>
                </Label>
              </div>
            )}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800" disabled={loading}>
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  <span>{isSignUp ? 'Creating Account...' : 'Logging in...'}</span>
                </div>
              ) : (
                <>{isSignUp ? "Sign Up" : 'Login'}</>
              )}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-slate-400">
            <p>
              {isSignUp ? 'Have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={toggleFormType}
                className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 focus:outline-none"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4">
            © 2024 Helix Terminal. All rights reserved.
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-blue-700 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center text-white relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              The simplest way to manage your workforce
            </h2>
            <p className="text-blue-200 text-sm mb-6">
              Enter your credentials to access your account
            </p>
            <div className="bg-blue-600/50 backdrop-blur-sm rounded-xl p-4 mb-6 w-full max-w-sm mx-auto">
              <img
                src="/dashboard-preview.png" 
                alt="Dashboard Preview"
                className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center space-x-4 opacity-80">
              <img src="/logos/tradingview-logo.svg" alt="WeChat" className="h-5" />
              <img src="/logos/metatrader-logo.svg" alt="Booking.com" className="h-5" />
              <img src="/logos/fxcm-logo.svg" alt="Google" className="h-5" />
              <img src="/logos/oanda-logo.svg" alt="Spotify" className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}