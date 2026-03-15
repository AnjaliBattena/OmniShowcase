import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText } from 'lucide-react';

const showcases = [
  {
    id: 'thoughtspot',
    name: 'ThoughtSpot Analytics',
    category: 'Dashboard',
    description: 'Analytics dashboard with metrics and data visualization',
    path: '/thoughtspot',
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xfea19wc074/conv-a9h24dt16tj4/20260315/file-a9j78q6muark.jpg',
    tags: ['Analytics', 'Dashboard', 'Data Viz']
  },
  {
    id: 'process-engine',
    name: 'Process Engine',
    category: 'Workflow',
    description: 'Dark-themed workflow visualization and process management',
    path: '/process-engine',
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xfea19wc074/conv-a9h24dt16tj4/20260315/file-a9j7c8gm1zi8.jpg',
    tags: ['Workflow', 'Dark Mode', 'Management']
  },
  {
    id: 'voyago',
    name: 'Voyago Travel',
    category: 'Booking',
    description: 'Travel booking platform with hotels and rentals',
    path: '/voyago',
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xfea19wc074/conv-a9h24dt16tj4/20260315/file-a9j7gmb3277k.jpg',
    tags: ['Travel', 'Booking', 'E-commerce']
  },
  {
    id: 'oad',
    name: 'OAD Dining',
    category: 'Review Platform',
    description: 'Restaurant reviews and city guides',
    path: '/oad',
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xfea19wc074/conv-a9h24dt16tj4/20260315/file-a9j7k4l296o0.jpg',
    tags: ['Reviews', 'Dining', 'Social']
  },
  {
    id: 'sapaceart',
    name: 'SapaceArt Interior',
    category: 'Landing Page',
    description: 'Interior design showcase and portfolio',
    path: '/sapaceart',
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xfea19wc074/conv-a9h24dt16tj4/20260315/file-a9j7n72skykg.jpg',
    tags: ['Design', 'Portfolio', 'Landing']
  },
  {
    id: 'apparte',
    name: 'Apparte Sales',
    category: 'SaaS Landing',
    description: 'Sales platform landing page with AI features',
    path: '/apparte',
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xfea19wc074/conv-a9h24dt16tj4/20260315/file-a9j9t8qsy7sw.jpg',
    tags: ['SaaS', 'Sales', 'AI']
  },
  {
    id: 'trafex',
    name: 'Trafex Contractor',
    category: 'Management',
    description: 'Contractor management and payments',
    path: '/trafex',
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xfea19wc074/conv-a9h24dt16tj4/20260315/file-a9j9xml9ys5c.jpg',
    tags: ['HR', 'Management', 'Finance']
  },
  {
    id: 'case-management',
    name: 'Case Management',
    category: 'Dashboard',
    description: 'Dark-themed case and document management',
    path: '/case-management',
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xfea19wc074/conv-a9h24dt16tj4/20260315/file-a9ja1kni2wow.jpg',
    tags: ['Dashboard', 'Dark Mode', 'Legal']
  },
  {
    id: 'tasking',
    name: 'Tasking Project',
    category: 'Project Management',
    description: 'Task and project management dashboard',
    path: '/tasking',
    image: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9xfea19wc074/conv-a9h24dt16tj4/20260315/file-a9ja4n58dzb4.jpg',
    tags: ['Tasks', 'Projects', 'Collaboration']
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden border-b border-border bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Background with Image */}
        <div className="absolute inset-0">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_29f3ac03-b600-4086-8818-2bda0b2da4d2.jpg"
              alt="Background"
              className="h-full w-full object-cover opacity-20"
            />
          </div>
          
          {/* Dark Gradient Overlays for Better Contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/90" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-secondary/40 to-accent/40 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-accent/30 via-primary/30 to-secondary/30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container relative mx-auto px-6 py-24 text-center">
          <div className="mx-auto max-w-5xl">
            {/* Floating Badge with Glow Effect */}
            <div className="mb-8 inline-flex animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />
                <div className="relative flex items-center gap-3 rounded-full border border-primary/30 bg-slate-900/80 px-6 py-3 backdrop-blur-xl shadow-2xl">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                  </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-sm font-bold text-transparent">
                    9 Premium Templates • Production Ready • Modern UI/UX
                  </span>
                </div>
              </div>
            </div>

            {/* Main Heading with 3D Effect */}
            <div className="mb-8 space-y-4">
              <h1 className="relative text-7xl font-black tracking-tight md:text-8xl lg:text-9xl">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent blur-2xl opacity-60">
                    OmniShowcase
                  </span>
                  <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                    OmniShowcase
                  </span>
                </span>
              </h1>
              
              {/* Animated Underline */}
              <div className="mx-auto h-2 w-64 overflow-hidden rounded-full bg-gradient-to-r from-transparent via-primary/50 to-transparent">
                <div className="h-full w-full animate-pulse bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
              </div>
            </div>

            {/* Subheading with Highlight */}
            <p className="mb-10 text-xl leading-relaxed text-slate-300 md:text-2xl lg:text-3xl">
              A comprehensive{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 -skew-x-12 bg-cyan-500/30 blur-sm" />
                <span className="relative font-bold text-white">design and UI showcase</span>
              </span>{' '}
              platform featuring{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 skew-x-12 bg-blue-500/30 blur-sm" />
                <span className="relative font-bold text-white">high-fidelity screen templates</span>
              </span>{' '}
              for dashboarding, booking, management, and landing pages.
            </p>

            {/* Feature Pills with Glassmorphism */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              {[
                { icon: '✨', text: '9 Templates', color: 'from-purple-500/30 to-pink-500/30' },
                { icon: '📱', text: 'Responsive Design', color: 'from-blue-500/30 to-cyan-500/30' },
                { icon: '🎨', text: 'Modern UI', color: 'from-green-500/30 to-emerald-500/30' },
                { icon: '🚀', text: 'Production Ready', color: 'from-orange-500/30 to-red-500/30' }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer transition-transform hover:scale-110"
                  onClick={() => alert(`${feature.text} - Click to learn more`)}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.color} blur-xl opacity-0 transition-opacity group-hover:opacity-100`} />
                  <div className="relative flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/80 px-6 py-3 backdrop-blur-xl shadow-lg">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-semibold text-white">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons with Enhanced Design */}
            <div className="mb-16 flex flex-wrap justify-center gap-6">
              <Button 
                size="lg" 
                className="group relative h-14 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-8 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-cyan-500/50"
                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Templates
                  <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group h-14 rounded-full border-2 border-cyan-500/50 bg-slate-900/80 px-8 text-lg font-bold backdrop-blur-xl transition-all hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30"
                onClick={() => alert('Opening documentation...')}
              >
                <span className="flex items-center gap-2 text-white">
                  View Documentation
                  <FileText className="h-5 w-5 transition-transform group-hover:rotate-12" />
                </span>
              </Button>
            </div>

            {/* Stats Grid with Cards */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { value: '9', label: 'Templates', icon: '🎯', color: 'from-purple-500 to-pink-500' },
                { value: '100%', label: 'Responsive', icon: '📐', color: 'from-blue-500 to-cyan-500' },
                { value: '50+', label: 'Components', icon: '🧩', color: 'from-green-500 to-emerald-500' },
                { value: '∞', label: 'Possibilities', icon: '🌟', color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer transition-transform hover:scale-105"
                  onClick={() => alert(`${stat.label}: ${stat.value}`)}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 blur-xl transition-opacity group-hover:opacity-50`} />
                  <Card className="relative overflow-hidden border-slate-700/50 bg-slate-900/80 backdrop-blur-xl transition-all group-hover:border-cyan-500/50 group-hover:shadow-2xl">
                    <CardContent className="p-6 text-center">
                      <div className="mb-2 text-4xl">{stat.icon}</div>
                      <div className={`mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-5xl font-black text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-slate-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[20%] h-20 w-20 animate-bounce rounded-lg bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/30" style={{ animationDuration: '4s', animationDelay: '0s' }} />
          <div className="absolute right-[15%] top-[30%] h-16 w-16 animate-bounce rounded-full bg-blue-500/20 backdrop-blur-xl border border-blue-500/30" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute bottom-[25%] left-[20%] h-24 w-24 animate-bounce rounded-xl bg-purple-500/20 backdrop-blur-xl border border-purple-500/30" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <div className="absolute bottom-[30%] right-[10%] h-20 w-20 animate-bounce rounded-lg bg-pink-500/20 backdrop-blur-xl border border-pink-500/30" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
        </div>
      </section>

      {/* Showcase Grid */}
      <main className="container mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold">Browse Templates</h2>
          <p className="text-muted-foreground">
            Explore our collection of professionally designed interface templates
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {showcases.map((showcase) => (
            <Link key={showcase.id} to={showcase.path} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02]">
                {/* Preview Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={showcase.image}
                    alt={showcase.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {showcase.category}
                    </Badge>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                    {showcase.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {showcase.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {showcase.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg font-semibold">OmniShowcase</h3>
              <p className="text-sm text-muted-foreground">
                Professional UI templates and design showcases for modern web applications.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Dashboards</li>
                <li>Landing Pages</li>
                <li>Management Systems</li>
                <li>Booking Platforms</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Responsive Design</li>
                <li>Modern UI Components</li>
                <li>Dark Mode Support</li>
                <li>Production Ready</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 OmniShowcase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
