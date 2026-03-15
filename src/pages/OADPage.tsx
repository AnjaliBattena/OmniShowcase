import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredRestaurants = [
  { id: '1', name: 'Desde 1911', location: 'Barcelona', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_17ad8632-e4f7-4b13-a200-40746dbb5e9a.jpg' },
  { id: '2', name: 'Nick Honey', location: 'London', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_754b0674-64fb-4359-8576-c595d21b41bf.jpg' },
  { id: '3', name: 'Rome', location: 'Italy', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ee9c92a6-465a-4518-9975-7ab80cef3924.jpg' },
  { id: '4', name: 'Cracco', location: 'Milan', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6b39c478-76ff-4036-b52b-962727267d91.jpg' },
  { id: '5', name: 'Alchemist', location: 'Copenhagen', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_9029c063-f813-4e0e-8548-ca9bc58283d2.jpg' },
  { id: '6', name: 'Andalusia', location: 'Spain', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b9c3654e-e7ab-4161-91c5-3b5fd70c5b4d.jpg' }
];

const cityGuides = [
  { id: '1', name: 'Roma', count: 156, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_0cc57ad5-a4c8-4e33-aaed-8cffcd365318.jpg' },
  { id: '2', name: 'Barcellona', count: 203, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_15957b49-775a-4a24-bc8b-b3d70b0b7c45.jpg' },
  { id: '3', name: 'Lisbona', count: 89, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_12bf9fed-76a7-4ceb-861a-4428509ccc41.jpg' },
  { id: '4', name: 'Santorini', count: 67, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b287f8cb-3829-4324-8469-65b613dc60c2.jpg' },
  { id: '5', name: 'Praga', count: 134, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_77b673a0-5136-4714-b1f4-5239bb6f3199.jpg' },
  { id: '6', name: 'Tallin', count: 78, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_41c47c69-8c78-440f-ab5b-3c684ad0aea2.jpg' },
  { id: '7', name: 'Manchester', count: 112, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c74d2fbf-1ad7-46cd-b96b-cfb9546622fb.jpg' },
  { id: '8', name: 'Paris', count: 245, image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ed8b054e-867b-43b7-a18d-193e46422ee5.jpg' }
];

const bestRestaurants = [
  { id: '1', name: 'Le Grand Restaurant', ranking: 555, region: 'Europe', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c2f91b9f-7ae7-411a-9d46-577d1747d7de.jpg' },
  { id: '2', name: 'Osteria Moderna', ranking: 60, region: 'Europe', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b836935c-8bd1-42ae-8d89-e599f1a32774.jpg' },
  { id: '3', name: 'The American Grill', ranking: 340, region: 'North America', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_7c010922-2ba3-4c58-a746-c186850113cf.jpg' },
  { id: '4', name: 'Tokyo Sushi Bar', ranking: 120, region: 'Asia', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_298477cb-58a5-4f42-a7a4-997682a31760.jpg' }
];

const recentPosts = [
  { id: '1', title: 'Best 20 Sushi Restaurant in Italy', category: 'Best Of', tag: 'Sushi', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_754b0674-64fb-4359-8576-c595d21b41bf.jpg' },
  { id: '2', title: 'Cinque Terre is the best food', category: 'Best Of', tag: 'City', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b70f480c-0b03-4d13-9769-0dbf486def7b.jpg' },
  { id: '3', title: 'Best 20 Restaurants', category: 'Best Of', tag: 'Chefs', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_17ad8632-e4f7-4b13-a200-40746dbb5e9a.jpg' },
  { id: '4', title: 'Chef Eats Around the World', category: 'Chef Eats', tag: 'Travel', image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6b39c478-76ff-4036-b52b-962727267d91.jpg' }
];

export default function OADPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold">OAD</h1>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#" className="font-medium cursor-pointer hover:text-primary" onClick={(e) => { e.preventDefault(); alert('Opening Explore section...'); }}>Explore</a>
                <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Dining Guides...'); }}>Dining Guides</a>
                <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Top Reviewers...'); }}>Top Reviewers</a>
                <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Travel with OAD...'); }}>Travel with OAD</a>
                <a href="#" className="text-muted-foreground hover:text-foreground cursor-pointer" onClick={(e) => { e.preventDefault(); alert('Opening Magazine...'); }}>Magazine</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => {}}>
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => {}}>
                <Globe className="h-5 w-5" />
              </Button>
              <span className="text-sm">English</span>
              <Button variant="default" size="sm" onClick={() => {}}>Make a review</Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard">Back</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-5xl font-bold">Opinionated About Dining</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                OAD is where people reviews counts. With over 400,000 reviews by more than 10,000 people we are lovers of good cuisine
              </p>

              {/* Featured Restaurants Carousel */}
              <div className="grid grid-cols-6 gap-2">
                {featuredRestaurants.map((restaurant) => (
                  <Card 
                    key={restaurant.id} 
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => alert(`Opening ${restaurant.name} restaurant details...`)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted overflow-hidden">
                        <img 
                          src={restaurant.image} 
                          alt={restaurant.name}
                          className="h-full w-full object-cover hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="p-2 text-center">
                        <p className="text-xs font-medium">{restaurant.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Side - Featured Images */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => alert('Opening restaurant details...')}>
                <img
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e67168ac-77be-43d9-b664-f6b4474f43cd.jpg"
                  alt="Featured Restaurant"
                  className="h-full w-full object-cover"
                />
              </Card>
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => alert('Opening restaurant details...')}>
                <img
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6d22fc03-b843-4bd2-8ea9-14605762981e.jpg"
                  alt="Featured Chef"
                  className="h-full w-full object-cover"
                />
              </Card>
              <Card className="col-span-2 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => alert('Opening restaurant details...')}>
                <img
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f2ce6539-4f94-41fc-b06e-c3c3fd90c01b.jpg"
                  alt="Featured Dining"
                  className="h-full w-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* City Guides Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h3 className="text-3xl font-bold">
              <span className="mr-2">16</span>
              <span className="text-muted-foreground">City Guides</span>
            </h3>
            <h3 className="text-3xl font-bold">
              <span className="mr-2 text-muted-foreground">4</span>
              <span className="text-muted-foreground">Country Guides</span>
            </h3>
          </div>
          <Button variant="link" className="gap-2" onClick={() => {}}>
            View all our guides
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {cityGuides.map((city) => (
            <Card 
              key={city.id} 
              className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer"
              onClick={() => alert(`Opening ${city.name} city guide with ${city.count} restaurants...`)}
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={city.image} 
                    alt={city.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{city.name}</h4>
                    <p className="text-sm">{city.count} restaurants</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Best Restaurants Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <h3 className="mb-8 text-3xl font-bold">Best restaurants</h3>
          
          <div className="mb-6 flex gap-4">
            <Button variant="default" onClick={() => {}}>Europe</Button>
            <Button variant="outline" onClick={() => {}}>North America</Button>
            <Button variant="outline" onClick={() => {}}>Asia</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bestRestaurants.map((restaurant) => (
              <Card 
                key={restaurant.id} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => alert(`Opening restaurant #${restaurant.ranking} - ${restaurant.name} details...`)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted overflow-hidden">
                    <img 
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="h-full w-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="secondary">{restaurant.ranking}</Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold">{restaurant.name}</h4>
                    <p className="text-sm text-muted-foreground">{restaurant.region}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Posted Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-3xl font-bold">Recently Posted</h3>
          <Button 
            variant="link" 
            className="gap-2 cursor-pointer" 
            onClick={() => alert('Opening magazine...')}
          >
            Explore our magazine
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {recentPosts.slice(0, 3).map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => alert(`Opening post: ${post.title}`)}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="outline">OAD {post.category}</Badge>
                    <Badge variant="secondary">{post.tag}</Badge>
                  </div>
                  <h4 className="font-semibold">{post.title}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Chef Eats Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-3xl font-bold">
              Chef Eats <span className="text-muted-foreground">(98)</span>
            </h3>
            <Button 
              variant="link" 
              className="gap-2 cursor-pointer" 
              onClick={() => alert('Viewing all 98 Chef Eats posts...')}
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {recentPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => alert(`Opening Chef Eats: ${post.title}`)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <Badge variant="secondary">{post.tag}</Badge>
                    </div>
                    <h4 className="font-semibold text-sm">{post.title}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Eats Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-3xl font-bold">
              Chef Eats <span className="text-muted-foreground">(98)</span>
            </h3>
            <Button variant="link" className="gap-2" onClick={() => {}}>
              View all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
