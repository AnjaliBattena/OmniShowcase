import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Modern Shop', value: '25+' },
  { label: 'Project Done', value: '256+' },
  { label: 'Product Available', value: '450+' },
  { label: 'Design style', value: '500k+' }
];

export default function SapaceArtPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">SapaceArt</h1>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#" className="font-medium">Products</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Brands</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Shop</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">About Us</a>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="default" onClick={() => {}}>Contact Us</Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/">Back</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-7xl font-bold uppercase leading-tight">
              SPACE
              <br />
              REIMAGINED
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Creating thoughtful, inspiring spaces that reflect your personality and elevate your lifestyle
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-design-lime hover:bg-design-lime/90 text-black" onClick={() => {}}>
                Start Innovation
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => {}}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground">
                  <Play className="h-4 w-4 fill-foreground" />
                </div>
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6eebf783-2be6-4b81-a4b7-52af22b395ee.jpg"
              alt="Modern living room"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats & Feature Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left - Black Card with Stats */}
            <Card className="bg-foreground text-background">
              <CardContent className="p-12">
                <h3 className="mb-8 text-2xl font-semibold">
                  Crafting personalized spaces that marry style, sophistication, and practicality
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Right - Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0252556a-92c4-4749-a467-bb25dd1f3504.jpg"
                alt="Interior design"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Showcase Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3f1d8999-fafb-4cb0-bd59-815bf1cb3015.jpg"
              alt="Interior design showcase"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right - Lime Card & Image */}
          <div className="grid gap-8">
            <Card className="bg-design-lime text-black">
              <CardContent className="p-12">
                <div className="mb-4 text-5xl font-bold">500k+</div>
                <div className="mb-4 text-2xl font-semibold">Design style</div>
                <p className="text-lg">
                  Helping you live beautifully by designing interiors that are as unique as you are
                </p>
              </CardContent>
            </Card>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b90c230c-648c-49c8-b68b-149da21125f2.jpg"
                alt="Modern interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Gallery */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative h-64 overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6eebf783-2be6-4b81-a4b7-52af22b395ee.jpg"
                alt="Design 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0252556a-92c4-4749-a467-bb25dd1f3504.jpg"
                alt="Design 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3f1d8999-fafb-4cb0-bd59-815bf1cb3015.jpg"
                alt="Design 3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 SapaceArt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
