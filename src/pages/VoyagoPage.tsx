import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Hotel, 
  Car, 
  Calendar, 
  MapPin, 
  Wifi, 
  UtensilsCrossed, 
  Bed, 
  Waves, 
  Home,
  Star,
  Heart,
  Users,
  Fuel,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const hotels = [
  {
    id: '1',
    name: 'Sakura Haven Kyoto',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_1f452060-d9c9-4540-b14d-3a7bec0fe163.jpg',
    rating: 4.7,
    amenities: ['Free Wi-Fi', 'Kitchen', 'Beds', 'Spa', 'Massage', 'Restaurant', 'Central location'],
    type: 'House',
    beds: 4,
    price: 180,
    description: 'A boutique hotel offering vegetarian breakfast and a central location in Kyoto. It\'s praised for its excellent service.'
  },
  {
    id: '2',
    name: 'Tokyo Sky Tower Hotel',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_fb4d0493-902e-4c35-af2c-347d5ce9b3d1.jpg',
    rating: 4.6,
    amenities: ['Free Wi-Fi', 'Kitchen', 'Beds'],
    type: 'Room',
    beds: 2,
    price: 66,
    description: 'Located in Nakagyo Ward, the hotel is known for its helpful staff, great location, and additional amenities.'
  },
  {
    id: '3',
    name: 'Okinawa Beach Resort',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_2b70c6c3-7cad-41ec-8ca9-906aede9281e.jpg',
    rating: 4.7,
    amenities: ['Free Wi-Fi', 'Restaurant', 'Beds', 'Room', 'Massage'],
    type: 'Room',
    beds: 2,
    price: 205,
    description: 'Situated in Shimogyo Ward, it features spacious rooms and is ideal for families and groups. Highly recommended.'
  },
  {
    id: '4',
    name: 'Mountain Ryokan Retreat',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b1d3bf4b-29fd-441c-9dc6-dac98161de1d.jpg',
    rating: 4.7,
    amenities: ['Free Wi-Fi', 'House', 'Beds'],
    type: 'House',
    beds: 2,
    price: 120,
    description: 'A contemporary hotel with public baths, located near Kyoto Station. Ideal for exploring the city.'
  }
];

const carRentals = [
  {
    id: '1',
    name: 'Toyota Camry',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cc9f380e-34ee-4742-b9d5-bcfad247d8b2.jpg',
    rating: 4.8,
    type: 'Sedan',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    price: 45,
    description: 'Comfortable sedan perfect for city driving and long trips'
  },
  {
    id: '2',
    name: 'Honda CR-V',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cc9f380e-34ee-4742-b9d5-bcfad247d8b2.jpg',
    rating: 4.7,
    type: 'SUV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    price: 65,
    description: 'Spacious SUV ideal for families and group travel'
  },
  {
    id: '3',
    name: 'Tesla Model 3',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cc9f380e-34ee-4742-b9d5-bcfad247d8b2.jpg',
    rating: 4.9,
    type: 'Electric',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    price: 85,
    description: 'Premium electric vehicle with advanced features'
  },
  {
    id: '4',
    name: 'Mazda MX-5',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cc9f380e-34ee-4742-b9d5-bcfad247d8b2.jpg',
    rating: 4.6,
    type: 'Sports',
    seats: 2,
    transmission: 'Manual',
    fuel: 'Gasoline',
    price: 75,
    description: 'Fun convertible sports car for scenic drives'
  }
];

const events = [
  {
    id: '1',
    name: 'Kyoto Cherry Blossom Festival',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_96ecbcd6-62a7-4c1f-979b-2e06fb404a2f.jpg',
    date: 'April 1-15, 2026',
    location: 'Maruyama Park, Kyoto',
    category: 'Festival',
    price: 'Free',
    description: 'Experience the beauty of cherry blossoms in full bloom'
  },
  {
    id: '2',
    name: 'Tokyo Tech Conference',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_96ecbcd6-62a7-4c1f-979b-2e06fb404a2f.jpg',
    date: 'May 20-22, 2026',
    location: 'Tokyo Big Sight',
    category: 'Conference',
    price: '$299',
    description: 'Annual technology conference featuring industry leaders'
  },
  {
    id: '3',
    name: 'Osaka Food Festival',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_96ecbcd6-62a7-4c1f-979b-2e06fb404a2f.jpg',
    date: 'June 10-12, 2026',
    location: 'Osaka Castle Park',
    category: 'Food & Drink',
    price: '$25',
    description: 'Taste the best of Japanese cuisine from local vendors'
  },
  {
    id: '4',
    name: 'Mount Fuji Hiking Tour',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_96ecbcd6-62a7-4c1f-979b-2e06fb404a2f.jpg',
    date: 'July 1-31, 2026',
    location: 'Mount Fuji',
    category: 'Adventure',
    price: '$150',
    description: 'Guided hiking experience to Japan\'s iconic mountain'
  }
];

const partners = [
  { name: 'Booking.com', logo: 'Booking.com' },
  { name: 'Airbnb', logo: 'airbnb' },
  { name: 'Expedia', logo: 'Expedia' },
  { name: 'Tripadvisor', logo: 'Tripadvisor' },
  { name: 'Outdoorsy', logo: 'Outdoorsy' }
];

export default function VoyagoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4a7c8f] via-[#5a8c9f] to-[#6a9caf]">
      {/* Navigation */}
      <header className="border-b border-white/20 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-white">Voyago</h1>
              <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
                <a href="#" className="border-b-2 border-white pb-1 font-medium">Homepage</a>
                <a href="#" className="hover:text-white">Vacation</a>
                <a href="#" className="hover:text-white">Hotels</a>
                <a href="#" className="hover:text-white">All In One</a>
                <a href="#" className="hover:text-white">Car Rental</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Kyoto, Japan</span>
              </div>
              <Button variant="secondary" size="sm" onClick={() => {}}>Register</Button>
              <Button variant="outline" size="sm" className="border-white hover:bg-white/20" asChild>
                <Link to="/" className="text-white">Back</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl">
          Start Your Journey to Your
          <br />
          Dream Destination Here.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-white/90">
          Start your journey to the destination you've always dreamed of. Discover stunning locations, plan with ease, and create memories that last a lifetime. Whether it's a relaxing escape or an exciting adventure, your perfect gateway begins right here.
        </p>

        {/* Search Tabs */}
        <div className="mx-auto max-w-2xl">
          <Tabs defaultValue="hotels" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black/30 backdrop-blur-md">
              <TabsTrigger value="hotels" className="data-[state=active]:bg-white/20">
                <Hotel className="mr-2 h-4 w-4" />
                Hotels
              </TabsTrigger>
              <TabsTrigger value="car" className="data-[state=active]:bg-white/20">
                <Car className="mr-2 h-4 w-4" />
                Car Rental
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-white/20">
                <Calendar className="mr-2 h-4 w-4" />
                Events
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="hotels" className="mt-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4 text-white text-center">
                  <p>Search for hotels in Kyoto, Japan and discover amazing accommodations</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="car" className="mt-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4 text-white text-center">
                  <p>Rent a car and explore Japan at your own pace</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="mt-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4 text-white text-center">
                  <p>Discover exciting events and activities in Japan</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Best Hotels Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-3xl font-bold text-white">Best hotels in</h3>
          <Button variant="secondary" size="sm" className="gap-2" onClick={() => {}}>
            <MapPin className="h-4 w-4" />
            Kyoto, Japan
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden bg-black/40 backdrop-blur-md border-white/20 transition-all hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-full w-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  onClick={() => {}}
                >
                  <Heart className="h-4 w-4 text-white" />
                </Button>
                <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-white">{hotel.rating}/5</span>
                </div>
              </div>
              <CardContent className="p-4 text-white">
                <h4 className="mb-2 font-semibold">{hotel.name}</h4>
                <p className="mb-3 text-xs text-white/70 line-clamp-2">{hotel.description}</p>
                <div className="mb-3 flex flex-wrap gap-1">
                  {hotel.amenities.slice(0, 3).map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/20 text-xs">
                      {amenity === 'Free Wi-Fi' && <Wifi className="mr-1 h-3 w-3" />}
                      {amenity === 'Kitchen' && <UtensilsCrossed className="mr-1 h-3 w-3" />}
                      {amenity === 'Beds' && <Bed className="mr-1 h-3 w-3" />}
                      {amenity === 'Spa' && <Waves className="mr-1 h-3 w-3" />}
                      {amenity === 'Restaurant' && <UtensilsCrossed className="mr-1 h-3 w-3" />}
                      {amenity === 'House' && <Home className="mr-1 h-3 w-3" />}
                      {amenity}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <Home className="h-3 w-3" />
                    <span>{hotel.type}</span>
                    <Bed className="h-3 w-3" />
                    <span>{hotel.beds} Beds</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">${hotel.price}</div>
                    <div className="text-xs text-white/70">/night</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Car Rental Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-3xl font-bold text-white">Car Rentals in Kyoto</h3>
          <Button variant="secondary" size="sm" className="gap-2" onClick={() => alert('Viewing all car rentals...')}>
            View All
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {carRentals.map((car) => (
            <Card 
              key={car.id} 
              className="overflow-hidden bg-black/40 backdrop-blur-md border-white/20 transition-all hover:scale-105 cursor-pointer"
              onClick={() => alert(`Booking ${car.name}...`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {car.rating}
                </div>
              </div>
              <CardContent className="p-4 text-white">
                <h4 className="mb-2 text-lg font-semibold">{car.name}</h4>
                <p className="mb-3 text-sm text-white/70">{car.description}</p>
                <div className="mb-3 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1 text-xs">
                    <Users className="h-3 w-3" />
                    {car.seats} Seats
                  </Badge>
                  <Badge variant="secondary" className="gap-1 text-xs">
                    <Settings className="h-3 w-3" />
                    {car.transmission}
                  </Badge>
                  <Badge variant="secondary" className="gap-1 text-xs">
                    <Fuel className="h-3 w-3" />
                    {car.fuel}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">${car.price}</span>
                    <span className="text-sm text-white/70">/day</span>
                  </div>
                  <Badge variant="outline" className="border-white/30 text-white">
                    {car.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-3xl font-bold text-white">Upcoming Events</h3>
          <Button variant="secondary" size="sm" className="gap-2" onClick={() => alert('Viewing all events...')}>
            View All
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="overflow-hidden bg-black/40 backdrop-blur-md border-white/20 transition-all hover:scale-105 cursor-pointer"
              onClick={() => alert(`Viewing ${event.name} details...`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-primary/90 backdrop-blur-sm">
                    {event.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4 text-white">
                <h4 className="mb-2 text-lg font-semibold">{event.name}</h4>
                <p className="mb-3 text-sm text-white/70">{event.description}</p>
                <div className="mb-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-white/70" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-white/70" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{event.price}</div>
                  <Button size="sm" variant="secondary" onClick={() => alert(`Booking ${event.name}...`)}>
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-t border-white/20 bg-white/10 backdrop-blur-md py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-12">
            {partners.map((partner) => (
              <div key={partner.name} className="text-xl font-semibold text-white/80">
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
