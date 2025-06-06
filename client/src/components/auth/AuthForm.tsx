import { useState, FormEvent, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useLocation } from 'react-router-dom';

import { Lock, Eye, EyeOff, User, Briefcase, ArrowRight, ExternalLink } from 'lucide-react'; 
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

export default function AuthForm() {
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
              full_name: name,
            }
          }
        });
        error = signUpError;
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        error = signInError;
      }

      if (error) throw error;

      toast({
        title: isSignUp ? 'Sign-up successful!' : 'Login successful!',
        description: isSignUp ? 'Please check your email to confirm your account.' : 'Redirecting to dashboard...',
      });
      if (!isSignUp) {
        navigate('/dashboard');
      } else {
        setEmail('');
        setPassword('');
        setName('');
        setAgreeTerms(false);
      }
    } catch (error: any) {
      toast({
        title: 'Authentication Error',
        description: error.message || 'An error occurred.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleFormType = () => {
    const newFormType = isSignUp ? 'signin' : 'signup';
    navigate(`/auth?form=${newFormType}`);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] md:bg-[#0F172A] flex items-center justify-center p-4 font-sans">
      <div className="flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <img 
            src="/lovable-uploads/fcc2c656-66bd-402c-a0c7-67f47ff18ea6.png" 
            alt="Helix Terminal Logo" 
            className="w-10 h-10 mb-8"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            {isSignUp ? 'Get Started Now' : 'Welcome Back'}
          </h1>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Enter your credentials to access your account.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
            <Button variant="outline" className="w-full flex items-center justify-center py-2.5 sm:py-3 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              <FcGoogle className="mr-2" size={20}/> Log in with Google
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center py-2.5 sm:py-3 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              <FaApple className="mr-2" size={20}/> Log in with Apple
            </Button>
          </div>

          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300"/>
            <span className="mx-3 text-gray-500 text-xs">OR</span>
            <hr className="flex-grow border-gray-300"/>
          </div>

          <form onSubmit={handleAuth} className="space-y-4 sm:space-y-5">
            {isSignUp && (
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium text-xs sm:text-sm mb-1 block">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Rafiqur Rahman"
                  className="w-full border-gray-300 rounded-lg py-2.5 sm:py-3 px-4 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm"
                />
              </div>
            )}

            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium text-xs sm:text-sm mb-1 block">Email address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="rafiqur51@company.com"
                className="w-full border-gray-300 rounded-lg py-2.5 sm:py-3 px-4 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <Label htmlFor="password" className="text-gray-700 font-medium text-xs sm:text-sm">Password</Label>
                {!isSignUp && (
                  <a href="#" onClick={(e) => {e.preventDefault(); toast({title: 'Feature Coming Soon', description: 'Password recovery will be available soon.'})}} className="text-xs sm:text-sm text-indigo-600 hover:underline">
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
                  placeholder={isSignUp ? "min. 8 characters" : "••••••••"}
                  className="w-full border-gray-300 rounded-lg py-2.5 sm:py-3 px-4 pr-10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded mr-2 cursor-pointer"
                />
                <Label htmlFor="terms" className="text-xs sm:text-sm text-gray-600 cursor-pointer">
                  I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Terms</a> & <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Privacy</a>.
                </Label>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 mt-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : isSignUp ? (
                'Login'
              ) : (
                'Login'
              )}
            </Button>
          </form>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-600">
              {isSignUp ? 'Have an account?' : 'Don\'t have an account?'}{' '}
              <button
                onClick={toggleFormType}
                className="font-semibold text-indigo-600 hover:underline transition-colors duration-300 focus:outline-none"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
          <p className="mt-8 sm:mt-10 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Acme. All right Reserved.
          </p>
        </div>

        <div className="hidden md:flex md:w-1/2 bg-indigo-600 p-8 sm:p-12 flex-col justify-center items-center text-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-60 h-60 sm:w-72 sm:h-72 bg-indigo-500/70 rounded-full opacity-80"></div>
          <div className="absolute -bottom-24 -left-10 w-80 h-80 sm:w-96 sm:h-96 bg-indigo-700/80 rounded-full opacity-90"></div>
          
          <div className="relative z-10 text-center max-w-md">
            {/* <Briefcase size={64} className="mx-auto mb-6 opacity-80"/> You can use an actual image/SVG for the dashboard preview */}
            <img src="https://cdn.dribbble.com/userupload/4380761/file/original-771cc5024f1323f6882777ddb7e4a6d1.png?resize=752x&vertical=center" alt="Dashboard Preview" className="rounded-lg shadow-xl mb-6 sm:mb-8 w-full opacity-90 clip-path-inset-y-1/4-x-1/2" style={{clipPath: 'inset(25% 50% 25% 0)'}} />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              The simplest way to manage your workforce
            </h2>
            <p className="text-indigo-200 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Enter your credentials to access your account.
            </p>
            
            <div className="flex flex-wrap justify-center items-center space-x-4 opacity-80 text-sm">
                <span>WeChat</span>
                <span>Booking.com</span>
                <span>Google</span>
                <span>Spotify</span>
                <span>Stripe</span>
            </div>
            {/*
            <Button 
              variant="outline"
              className="mt-10 bg-white/20 hover:bg-white/30 text-white border-white/50 hover:border-white py-3 px-6 rounded-lg flex items-center group text-sm"
              onClick={() => window.open('https://helix-terminal.com', '_blank')}
            >
              Learn more about Helix Terminal <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
            </Button>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}