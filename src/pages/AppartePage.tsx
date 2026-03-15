import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AppartePage() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Navigation */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">✕✕ apparte</div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#" className="font-medium cursor-pointer hover:text-primary" onClick={(e) => { e.preventDefault(); alert('Opening Platform...'); }}>Platform</a>
              <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Teams...'); }}>Teams</a>
              <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Resources...'); }}>Resources</a>
              <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Pricing...'); }}>Pricing</a>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="default" onClick={() => alert('Getting started with Apparte...')}>Get started</Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard">Back</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-6xl font-bold leading-tight">
              the only solution you need to run{' '}
              <span className="text-muted-foreground">
                a world-class sales organization
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Find buyers, close deals, and watch your business grow with Apparte's end-to-end sales solution, powered by AI
            </p>
            <div className="mb-6 flex gap-4">
              <Button size="lg" className="bg-[#4a6b5a] hover:bg-[#3a5b4a]" onClick={() => alert('Getting started...')}>
                Get started
              </Button>
              <Button size="lg" variant="outline" onClick={() => alert('Booking a demo...')}>
                Get a demo
              </Button>
            </div>
            <Card className="bg-[#f5f1e8]">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                  ))}
                  <Star className="h-5 w-5 fill-orange-400 text-orange-400 opacity-50" />
                </div>
                <div className="text-sm">
                  <span className="font-semibold">4.8/5</span> Based on 6,904 reviews | GDPR Compliant
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Product Mockup */}
          <div className="relative">
            <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <CardContent className="p-8">
                <div className="mb-6 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <Badge className="mb-2 bg-white/20">Form Submitted</Badge>
                  <p className="text-sm">New lead captured</p>
                </div>

                <Card className="mb-6 bg-white text-foreground">
                  <CardContent className="p-4">
                    <div className="mb-3 text-sm text-muted-foreground">
                      Send your client an email
                    </div>
                    <div className="mb-4 text-xs text-muted-foreground">
                      View email
                    </div>
                    <Card className="bg-muted/50">
                      <CardContent className="flex items-center gap-4 p-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            ZT
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-semibold">Zaek Treme</div>
                          <div className="text-sm text-muted-foreground">
                            Founder & Ceo Apparteal
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Button className="mt-4 w-full bg-foreground text-background hover:bg-foreground/90" onClick={() => {}}>
                      Add to sequence
                    </Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Everything you need to scale your sales
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => alert('Learn more about Find Buyers...')}>
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="mb-2 text-xl font-semibold">Find Buyers</h3>
                <p className="text-muted-foreground">
                  Discover and connect with qualified leads using AI-powered insights
                </p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => alert('Learn more about Close Deals...')}>
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">💼</div>
                <h3 className="mb-2 text-xl font-semibold">Close Deals</h3>
                <p className="text-muted-foreground">
                  Streamline your sales process with automated workflows and smart sequences
                </p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => alert('Learn more about Grow Business...')}>
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">📈</div>
                <h3 className="mb-2 text-xl font-semibold">Grow Business</h3>
                <p className="text-muted-foreground">
                  Track performance and optimize your strategy with real-time analytics
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Powered Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_782e5ada-6a24-49bd-a056-c6d280d610d9.jpg"
                alt="AI Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Badge className="mb-4 bg-primary/10 text-primary">AI-Powered</Badge>
            <h2 className="text-4xl font-bold mb-4">Intelligent Sales Automation</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Let AI handle the repetitive tasks while you focus on building relationships. Our intelligent automation learns from your best practices and optimizes your sales process.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Smart lead scoring and prioritization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Automated email sequences with personalization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>Predictive analytics for deal forecasting</span>
              </li>
            </ul>
            <Button size="lg" onClick={() => alert('Exploring AI features...')}>Explore AI Features</Button>
          </div>
        </div>
      </section>

      {/* CRM Dashboard Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary">Analytics</Badge>
              <h2 className="text-4xl font-bold mb-4">Real-Time Sales Dashboard</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Get instant visibility into your sales pipeline with comprehensive analytics and reporting. Make data-driven decisions with confidence.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">250%</div>
                  <div className="text-sm text-muted-foreground">Average ROI Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">10x</div>
                  <div className="text-sm text-muted-foreground">Faster Deal Closure</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
              <Button size="lg" variant="outline" onClick={() => alert('Viewing dashboard demo...')}>View Dashboard Demo</Button>
            </div>
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0de7fb61-898a-4bcf-bed4-a7fbcd74ffd3.jpg"
                alt="Sales CRM Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Built for Sales Teams</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborate seamlessly with your team, share insights, and close deals faster together.
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-hidden rounded-lg shadow-2xl">
          <img
            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b7a4287b-9345-415d-aa93-c75be27b9611.jpg"
            alt="Team Collaboration"
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => alert('Learn about team features...')}>
            <CardContent className="p-6">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-semibold mb-2">Team Inbox</h3>
              <p className="text-sm text-muted-foreground">Shared inbox for team collaboration</p>
            </CardContent>
          </Card>
          <Card className="text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => alert('Learn about pipeline sharing...')}>
            <CardContent className="p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-semibold mb-2">Pipeline Sharing</h3>
              <p className="text-sm text-muted-foreground">Real-time pipeline visibility</p>
            </CardContent>
          </Card>
          <Card className="text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => alert('Learn about performance tracking...')}>
            <CardContent className="p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Performance Tracking</h3>
              <p className="text-sm text-muted-foreground">Individual and team metrics</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Apparte. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
