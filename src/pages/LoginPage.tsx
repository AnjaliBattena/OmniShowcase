import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Github, Chrome, Apple } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    alert(`Login successful!\n\nEmail: ${email}\nRemember me: ${rememberMe ? 'Yes' : 'No'}\n\nRedirecting to dashboard...`);
    navigate('/');
  };

  const handleSocialLogin = (provider: string) => {
    alert(`Logging in with ${provider}...\n\nThis would connect to ${provider} OAuth in production.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_29f3ac03-b600-4086-8818-2bda0b2da4d2.jpg"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        
        {/* Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/90" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/40 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/40 to-purple-500/40 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="mb-8 text-center">
            <Link to="/" className="inline-block">
              <h1 className="mb-2 text-5xl font-black">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  OmniShowcase
                </span>
              </h1>
            </Link>
            <p className="text-slate-400">Sign in to access your dashboard</p>
          </div>

          {/* Login Card */}
          <Card className="border-slate-700/50 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-white">Welcome back</CardTitle>
              <CardDescription className="text-slate-400">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50"
                  onClick={() => handleSocialLogin('Google')}
                >
                  <Chrome className="h-5 w-5 text-white" />
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50"
                  onClick={() => handleSocialLogin('GitHub')}
                >
                  <Github className="h-5 w-5 text-white" />
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700/50"
                  onClick={() => handleSocialLogin('Apple')}
                >
                  <Apple className="h-5 w-5 text-white" />
                </Button>
              </div>

              {/* Divider */}
              <div className="relative">
                <Separator className="bg-slate-700" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-2 text-xs text-slate-400">
                  OR CONTINUE WITH
                </span>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-slate-700 bg-slate-800/50 pl-10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-slate-700 bg-slate-800/50 pl-10 pr-10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      className="border-slate-700 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm text-slate-400 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <Button
                    type="button"
                    variant="link"
                    className="h-auto p-0 text-sm text-cyan-400 hover:text-cyan-300"
                    onClick={() => alert('Password reset link would be sent to your email.\n\nIn production, this would trigger a password reset flow.')}
                  >
                    Forgot password?
                  </Button>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  Sign In
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-slate-400">
                Don't have an account?{' '}
                <Button
                  variant="link"
                  className="h-auto p-0 text-cyan-400 hover:text-cyan-300"
                  onClick={() => alert('Sign up page would be displayed.\n\nIn production, this would navigate to the registration page.')}
                >
                  Sign up
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <div className="mt-8 text-center text-sm text-slate-500">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => alert('Terms of Service\n\nThis would display the terms and conditions.')}
                className="hover:text-slate-300 transition-colors"
              >
                Terms
              </button>
              <span>•</span>
              <button
                onClick={() => alert('Privacy Policy\n\nThis would display the privacy policy.')}
                className="hover:text-slate-300 transition-colors"
              >
                Privacy
              </button>
              <span>•</span>
              <button
                onClick={() => alert('Help & Support\n\nThis would open the help center or support chat.')}
                className="hover:text-slate-300 transition-colors"
              >
                Help
              </button>
            </div>
            <p className="mt-4">© 2026 OmniShowcase. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
