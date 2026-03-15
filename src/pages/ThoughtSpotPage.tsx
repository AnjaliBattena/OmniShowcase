import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Star, 
  User, 
  Bell, 
  Sparkles, 
  GraduationCap, 
  FileText, 
  Plus, 
  Search,
  BarChart3,
  Table2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const analyticsCards = [
  {
    id: '1',
    title: 'CQ Booked ACV',
    value: '794.9k',
    source: 'ThoughtSpot Sales',
    author: { name: 'Naresh Kumar', initials: 'NK' },
    color: 'bg-[#6B8E6F]' as const
  },
  {
    id: '2',
    title: 'CQ Booked ACV',
    value: '794.9k',
    source: 'ThoughtSpot Sales',
    author: { name: 'Naresh Kumar', initials: 'NK' },
    color: 'bg-analytics-purple' as const
  }
];

const userAvatars = [
  { id: '1', emoji: '🐶', bg: 'bg-yellow-100' },
  { id: '2', emoji: '🐸', bg: 'bg-green-100' },
  { id: '3', emoji: '🦊', bg: 'bg-orange-100' },
  { id: '4', emoji: '🐷', bg: 'bg-pink-100' },
  { id: '5', emoji: '🐼', bg: 'bg-gray-100' },
  { id: '6', initials: 'KP', bg: 'bg-cyan-200' },
  { id: '7', initials: 'FJ', bg: 'bg-green-200' },
  { id: '8', initials: 'MI', bg: 'bg-orange-200' },
  { id: '9', initials: 'BB', bg: 'bg-purple-200' },
  { id: '10', initials: 'LP', bg: 'bg-gray-200' }
];

export default function ThoughtSpotPage() {
  const [showQuery, setShowQuery] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top Navigation */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            <span className="text-xl font-bold">ThoughtSpot</span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-card p-4">
          <div className="mb-6 flex items-center gap-2 border-b border-border pb-4">
            <Table2 className="h-5 w-5" />
            <span className="font-semibold">ThoughtSpot</span>
          </div>

          <div className="space-y-1">
            <h3 className="mb-3 px-3 text-sm font-semibold text-foreground">Home</h3>
            
            <Button variant="default" className="w-full justify-start gap-2" size="sm" onClick={() => alert('Opening Create New dialog...')}>
              <Plus className="h-4 w-4" />
              Create New
            </Button>

            <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary" size="sm" onClick={() => alert('You are on Home page')}>
              <Home className="h-4 w-4" />
              Home
            </Button>

            <Button variant="ghost" className="w-full justify-start gap-2" size="sm" onClick={() => alert('Opening Favorites...')}>
              <Star className="h-4 w-4" />
              Favorites
            </Button>

            <Button variant="ghost" className="w-full justify-start gap-2" size="sm" onClick={() => alert('Opening Created by me...')}>
              <User className="h-4 w-4" />
              Created by me
            </Button>

            <div className="my-4 border-t border-border" />

            <Button variant="ghost" className="w-full justify-start gap-2" size="sm" onClick={() => alert('Opening Monitor Alerts...')}>
              <Bell className="h-4 w-4" />
              Monitor Alerts
            </Button>

            <Button variant="ghost" className="w-full justify-start gap-2" size="sm" onClick={() => alert('Opening SpotIQ Analysis...')}>
              <Sparkles className="h-4 w-4" />
              SpotIQ Analysis
            </Button>

            <div className="my-4 border-t border-border" />

            <Button variant="ghost" className="w-full justify-start gap-2" size="sm" onClick={() => alert('Opening Tutorials...')}>
              <GraduationCap className="h-4 w-4" />
              Tutorials
            </Button>

            <Button variant="ghost" className="w-full justify-start gap-2" size="sm" onClick={() => alert('Opening Documentation...')}>
              <FileText className="h-4 w-4" />
              Documentation
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="grid gap-6 p-6 lg:grid-cols-2">
            {/* Left Column - Analytics Cards */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Home</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search..." className="w-64 pl-9" />
                </div>
              </div>

              {analyticsCards.map((card) => (
                <Card key={card.id} className={`${card.color} text-white`}>
                  <CardHeader>
                    <CardTitle className="text-sm font-normal opacity-90">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 text-5xl font-bold">{card.value}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">{card.source}</span>
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-white text-foreground text-xs">
                          {card.author.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Column - User Avatars & Details */}
            <div className="space-y-6">
              {/* User Avatars Grid */}
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-5 gap-3">
                    {userAvatars.map((avatar) => (
                      <div
                        key={avatar.id}
                        className={`flex h-14 w-14 items-center justify-center rounded-xl ${avatar.bg} text-lg font-semibold`}
                      >
                        {avatar.emoji || avatar.initials}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Details Panel */}
              <Card>
                <CardHeader>
                  <Tabs defaultValue="view" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="view">View</TabsTrigger>
                      <TabsTrigger value="explore">Explore</TabsTrigger>
                      <TabsTrigger value="format">Format</TabsTrigger>
                    </TabsList>
                    <TabsContent value="view" className="mt-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Show Query</span>
                        <Switch checked={showQuery} onCheckedChange={setShowQuery} />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1" onClick={() => {}}>
                          <Table2 className="mr-2 h-4 w-4" />
                          Table
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1" onClick={() => {}}>
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Chart
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="explore" className="mt-6">
                      <p className="text-sm text-muted-foreground">Explore options will appear here</p>
                    </TabsContent>
                    <TabsContent value="format" className="mt-6">
                      <p className="text-sm text-muted-foreground">Format options will appear here</p>
                    </TabsContent>
                  </Tabs>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-3 font-semibold">Details</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <p className="text-sm font-medium">Author</p>
                      <p className="text-sm text-muted-foreground">Naresh Kumar</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Created</p>
                      <p className="text-sm text-muted-foreground">Oct 31, 2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
