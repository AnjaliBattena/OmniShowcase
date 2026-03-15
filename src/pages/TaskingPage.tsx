import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  LayoutDashboard, 
  Trello, 
  Clock, 
  Calendar, 
  Settings, 
  MessageSquare, 
  Plus, 
  ExternalLink, 
  Pause, 
  Square,
  Send,
  Menu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  { id: '1', name: 'Sarah', initials: 'S', color: 'bg-pink-400' },
  { id: '2', name: 'Mike', initials: 'M', color: 'bg-blue-400' },
  { id: '3', name: 'Alex', initials: 'A', color: 'bg-purple-400' },
  { id: '4', name: 'Emma', initials: 'E', color: 'bg-green-400' },
  { id: '5', name: 'John', initials: 'J', color: 'bg-orange-400' }
];

const timelineEvents = [
  { title: 'UX Research', time: '18:30', members: [0, 1], color: 'bg-yellow-400' },
  { title: 'Mentoring', time: '14:00', members: [2], color: 'bg-purple-400' },
  { title: 'Meeting', time: '10:00', members: [1, 2], color: 'bg-orange-400' },
  { title: 'Wireframing', time: '16:00', members: [1, 3], color: 'bg-blue-400' }
];

const tasks = [
  { title: 'Create design system', progress: 81, subtask: 'Adjust text and color at Landing page' },
  { title: 'Meeting with Reza', date: '8 Tue', progress: 0 },
  { title: 'Feedback at Mobile apps', progress: 81, subtask: 'Adjust text and color at landing page' }
];

export default function TaskingPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-border bg-card p-6">
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl">✈️</span>
            </div>
            <span className="text-xl font-bold">Tasking</span>
          </div>

          <div className="mb-8">
            <div className="mb-2 text-2xl">Hello 👋 Daniel</div>
            <div className="text-sm text-muted-foreground">Let's do a great job today 👀</div>
          </div>

          <nav className="space-y-2">
            <Button variant="default" className="w-full justify-start gap-2" onClick={() => alert('You are on Dashboard')}>
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => alert('Opening My board with 2 notifications...')}>
              <Trello className="h-4 w-4" />
              My board
              <Badge className="ml-auto bg-red-500">2</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => alert('Opening Timeline...')}>
              <Clock className="h-4 w-4" />
              Timeline
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => alert('Opening Schedule with 4 notifications...')}>
              <Calendar className="h-4 w-4" />
              Schedule
              <Badge className="ml-auto bg-red-500">4</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => alert('Opening Settings...')}>
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>

          <div className="mt-8">
            <Button variant="ghost" className="w-full justify-start gap-2 mb-4" onClick={() => alert('Opening Group Chat...')}>
              <MessageSquare className="h-4 w-4" />
              Group Chat
              <ExternalLink className="ml-auto h-3 w-3" />
            </Button>
            <div className="space-y-3 rounded-lg bg-muted/50 p-3">
              <div className="text-xs text-muted-foreground">Hello guys...</div>
              <div className="flex items-start gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-pink-400 text-xs">S</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-xs font-medium">Sintia</div>
                  <div className="text-xs text-muted-foreground">can you send me the brief?</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-blue-400 text-xs">J</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-xs font-medium">Joseph</div>
                  <div className="text-xs text-muted-foreground">hey hey hey, what's going on ?</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Type here..." className="h-8 text-xs" />
                <Button size="icon" className="h-8 w-8" onClick={() => alert('Sending message...')}>
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Bar */}
          <header className="border-b border-border bg-card px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-muted px-4 py-2">
                  <div className="text-sm font-medium">23 Friday December</div>
                </div>
                <Button variant="default" size="sm" onClick={() => alert('Viewing My Tasks...')}>My Task</Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-xs">D</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">Daniel</div>
                    <div className="text-xs text-muted-foreground">UI Designer</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/dashboard">Back</Link>
                </Button>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="grid gap-6 p-6 lg:grid-cols-3">
            {/* Left Column */}
            <div className="space-y-6 lg:col-span-2">
              {/* Task Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold">16,5</div>
                      <div className="text-sm text-muted-foreground">hours</div>
                    </div>
                    <Button variant="outline" size="icon" onClick={() => {}}>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-500">Productive</Badge>
                    <Badge className="bg-yellow-500">Middle</Badge>
                    <Badge className="bg-gray-500">Idle</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Core Teams & Timeline */}
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold">Core teams</h3>
                    <div className="mb-4 text-3xl font-bold">321</div>
                    <div className="mb-3 text-sm text-muted-foreground">members</div>
                    <div className="flex -space-x-2">
                      {teamMembers.map((member) => (
                        <Avatar key={member.id} className="h-8 w-8 border-2 border-card">
                          <AvatarFallback className={`${member.color} text-xs`}>
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-semibold">Task timeline</h3>
                      <Badge className="bg-muted">16:30</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4">See the progress here</div>
                    <div className="space-y-3">
                      {timelineEvents.map((event, index) => (
                        <div key={index} className={`flex items-center gap-2 rounded-full ${event.color} px-3 py-2`}>
                          <div className="flex -space-x-1">
                            {event.members.map((memberIndex) => (
                              <Avatar key={memberIndex} className="h-5 w-5 border border-white">
                                <AvatarFallback className={`${teamMembers[memberIndex].color} text-xs`}>
                                  {teamMembers[memberIndex].initials}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <span className="flex-1 text-xs font-medium text-white">{event.title}</span>
                          <ExternalLink className="h-3 w-3 text-white" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Task Analysis */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">Task Analysis</h3>
                    <div className="text-2xl font-bold">72%</div>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-32">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <div key={index} className="flex flex-col items-center gap-2 flex-1">
                        <div className={`w-full rounded-t-lg ${index === 3 ? 'bg-primary h-24' : index === 4 ? 'bg-orange-400 h-16' : 'bg-muted h-8'}`} />
                        <div className="text-xs text-muted-foreground">{day}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Schedule Calendar */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">Schedule</h3>
                    <Button variant="ghost" size="icon" onClick={() => {}}>
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <div key={day} className="text-muted-foreground">{day}</div>
                    ))}
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square flex items-center justify-center rounded ${
                          [1, 8, 9, 21, 22].includes(i + 1) ? 'bg-primary/20 text-primary' : ''
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2 text-xs">
                    <Badge variant="outline">Yours</Badge>
                    <Badge variant="outline">Budieh</Badge>
                    <Badge variant="outline">Amara</Badge>
                    <Badge variant="outline">Yo</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Time Tracker */}
              <Card className="bg-foreground text-background">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">Time tracker</h3>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <div className="mb-6 text-center text-5xl font-bold">08:32:05</div>
                  <div className="flex gap-2">
                    <Button variant="secondary" className="flex-1 gap-2" onClick={() => {}}>
                      <Pause className="h-4 w-4" />
                      Pause
                    </Button>
                    <Button variant="destructive" className="flex-1 gap-2" onClick={() => {}}>
                      <Square className="h-4 w-4" />
                      Stop
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Task for Today */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">Task for today</h3>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <div className="space-y-4">
                    {tasks.map((task, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-sm font-medium">{task.title}</div>
                            {task.subtask && (
                              <div className="text-xs text-muted-foreground">{task.subtask}</div>
                            )}
                            {task.date && (
                              <Badge variant="secondary" className="mt-1 bg-primary/20 text-primary text-xs">
                                {task.date}
                              </Badge>
                            )}
                          </div>
                          {task.progress > 0 && (
                            <div className="text-sm font-semibold">{task.progress}%</div>
                          )}
                        </div>
                        {task.progress > 0 && (
                          <Progress value={task.progress} className="h-2" />
                        )}
                      </div>
                    ))}
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
