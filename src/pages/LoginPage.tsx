import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Github, Chrome, Apple, User, Phone } from 'lucide-react';

export default function LoginPage() {
  // Login State
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  // Register State
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`✅ Login Successful!\n\nEmail: ${loginEmail}\nRemember me: ${rememberMe ? 'Yes' : 'No'}\n\nWelcome back to OmniShowcase!\nRedirecting to dashboard...`);
    navigate('/');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!registerName || !registerEmail || !registerPassword || !confirmPassword) {
      alert('❌ Error\n\nPlease fill in all required fields.');
      return;
    }
    
    if (registerPassword !== confirmPassword) {
      alert('❌ Error\n\nPasswords do not match. Please try again.');
      return;
    }
    
    if (registerPassword.length < 8) {
      alert('❌ Error\n\nPassword must be at least 8 characters long.');
      return;
    }
    
    if (!agreeTerms) {
      alert('❌ Error\n\nYou must agree to the Terms of Service and Privacy Policy to continue.');
      return;
    }
    
    alert(`✅ Registration Successful!\n\nWelcome ${registerName}!\n\nAccount Details:\n• Name: ${registerName}\n• Email: ${registerEmail}\n• Phone: ${registerPhone || 'Not provided'}\n\nA verification email has been sent to ${registerEmail}.\nPlease verify your email to activate your account.\n\nRedirecting to dashboard...`);
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

          {/* Login/Register Card */}
          <Card className="border-slate-700/50 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
            <Tabs defaultValue="login" className="w-full">
              <CardHeader className="space-y-1 pb-4">
                <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
                  <TabsTrigger 
                    value="login" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>
              </CardHeader>

              {/* LOGIN TAB */}
              <TabsContent value="login">
                <CardHeader className="pt-0">
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
                      <Label htmlFor="login-email" className="text-white">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="name@example.com"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="border-slate-700 bg-slate-800/50 pl-10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-white">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="login-password"
                          type={showLoginPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="border-slate-700 bg-slate-800/50 pl-10 pr-10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowLoginPassword(!showLoginPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                        >
                          {showLoginPassword ? (
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
                        onClick={() => alert('Password Reset\n\nA password reset link will be sent to your email address.\n\nPlease check your inbox and follow the instructions to reset your password.')}
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
                </CardContent>
              </TabsContent>

              {/* REGISTER TAB */}
              <TabsContent value="register">
                <CardHeader className="pt-0">
                  <CardTitle className="text-2xl font-bold text-white">Create an account</CardTitle>
                  <CardDescription className="text-slate-400">
                    Enter your information to get started
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
                      OR REGISTER WITH EMAIL
                    </span>
                  </div>

                  {/* Register Form */}
                  <form onSubmit={handleRegister} className="space-y-4">
                    {/* Full Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="register-name" className="text-white">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="register-name"
                          type="text"
                          placeholder="John Doe"
                          value={registerName}
                          onChange={(e) => setRegisterName(e.target.value)}
                          className="border-slate-700 bg-slate-800/50 pl-10 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-white">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="name@example.com"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          className="border-slate-700 bg-slate-800/50 pl-10 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Field (Optional) */}
                    <div className="space-y-2">
                      <Label htmlFor="register-phone" className="text-white">Phone Number (Optional)</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="register-phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={registerPhone}
                          onChange={(e) => setRegisterPhone(e.target.value)}
                          className="border-slate-700 bg-slate-800/50 pl-10 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-white">Password *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="register-password"
                          type={showRegisterPassword ? 'text' : 'password'}
                          placeholder="Create a strong password"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          className="border-slate-700 bg-slate-800/50 pl-10 pr-10 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500"
                          required
                          minLength={8}
                        />
                        <button
                          type="button"
                          onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                        >
                          {showRegisterPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-slate-500">Must be at least 8 characters long</p>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-white">Confirm Password *</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="confirm-password"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Re-enter your password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="border-slate-700 bg-slate-800/50 pl-10 pr-10 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreeTerms}
                        onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                        className="mt-1 border-slate-700 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-slate-400 cursor-pointer leading-relaxed"
                      >
                        I agree to the{' '}
                        <button
                          type="button"
                          onClick={() => alert('Terms of Service\n\nBy using OmniShowcase, you agree to:\n\n1. Use the platform responsibly\n2. Respect intellectual property rights\n3. Maintain account security\n4. Comply with applicable laws\n5. Accept our privacy policy\n\nFor full terms, visit our website.')}
                          className="text-purple-400 hover:text-purple-300 underline"
                        >
                          Terms of Service
                        </button>{' '}
                        and{' '}
                        <button
                          type="button"
                          onClick={() => alert('Privacy Policy\n\nWe protect your data:\n\n• Encrypted data transmission\n• Secure password storage\n• No selling of personal information\n• GDPR compliant\n• Regular security audits\n\nYour privacy is our priority.')}
                          className="text-purple-400 hover:text-purple-300 underline"
                        >
                          Privacy Policy
                        </button>
                      </label>
                    </div>

                    {/* Register Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      Create Account
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>
            </Tabs>
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
