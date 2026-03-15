import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Workflow, 
  Search, 
  Settings, 
  Bell, 
  Play, 
  Upload, 
  Copy, 
  BarChart3, 
  Share2, 
  Code,
  ArrowDown,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const workflowNodes = [
  { id: '1', type: 'Set Parameter', value: 27, health: 59, errors: 59, color: 'bg-red-500' },
  { id: '2', type: 'API Call', value: 14, health: 17, errors: 17, color: 'bg-yellow-500' },
  { id: '3', type: 'Reply to Process', value: 1, health: 0, errors: 0, color: 'bg-gray-500' },
  { id: '4', type: 'Reply to Process', value: 3, health: 0, errors: 0, color: 'bg-gray-500' },
  { id: '5', type: 'Reply to Process', value: 7, health: 12, errors: 12, color: 'bg-yellow-500' },
  { id: '6', type: 'Reply to Process', value: 5, health: 14, errors: 14, color: 'bg-yellow-500' },
  { id: '7', type: 'Node', value: 35, health: 0, errors: 0, color: 'bg-gray-500' },
  { id: '8', type: 'Node', value: 17, health: 0, errors: 0, color: 'bg-gray-500' }
];

const activities = [
  { user: 'Ava Taylor', action: 'created the process', time: 'Jan 12, 2022 / 12:18', initials: 'AT', color: 'bg-blue-500' },
  { user: 'Ava Taylor', action: 'invited Michael Bennett', time: 'Jan 12, 2022 / 12:22', initials: 'AT', color: 'bg-blue-500' },
  { user: 'Ava Taylor', action: 'invited Ethan Clark', time: 'Jan 12, 2022 / 12:24', initials: 'AT', color: 'bg-blue-500' },
  { user: 'Michael Bennett', action: 'added / Set Parameter node', time: 'Jan 13, 2022 / 10:06', initials: 'MB', color: 'bg-green-500' },
  { user: 'Michael Bennett', action: 'added / API call node', time: 'Jan 13, 2022 / 10:13', initials: 'MB', color: 'bg-green-500' },
  { user: 'Ava Taylor', action: 'invited Jacob Turner', time: 'Jan 13, 2022 / 19:12', initials: 'AT', color: 'bg-blue-500' }
];

export default function ProcessEnginePage() {
  return (
    <div className="min-h-screen bg-[#1a1d29] text-white">
      {/* Top Navigation */}
      <header className="border-b border-gray-800 bg-[#252836] px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Workflow className="h-5 w-5" />
              <span className="text-sm">/ Process Engine</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={() => {}}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={() => {}}>
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white" onClick={() => {}}>
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Project Header */}
      <div className="border-b border-gray-800 bg-[#252836] px-6 py-4">
        <div className="mb-2 text-sm text-gray-400">
          Projects / <span className="text-green-400">Shared with me</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-green-400">
              Demo for VISA: Check transaction for antifraud. (Version 1.1.02)
            </h1>
            <Badge variant="outline" className="border-red-500 text-red-500">
              [Read only]
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <Avatar className="h-8 w-8 border-2 border-[#252836]">
                <AvatarFallback className="bg-blue-500 text-xs">AT</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-[#252836]">
                <AvatarFallback className="bg-green-500 text-xs">MB</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-[#252836]">
                <AvatarFallback className="bg-purple-500 text-xs">EC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800 bg-[#252836] px-6">
        <div className="flex items-center justify-between">
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="bg-transparent">
              <TabsTrigger value="preview" className="border-b-2 border-green-400 data-[state=active]:bg-transparent data-[state=active]:text-green-400">
                Preview
              </TabsTrigger>
              <TabsTrigger value="edit" className="data-[state=active]:bg-transparent">
                Edit
              </TabsTrigger>
              <TabsTrigger value="debug" className="data-[state=active]:bg-transparent">
                Debug
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={() => {}}>
              <Upload className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={() => {}}>
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={() => {}}>
              <BarChart3 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={() => {}}>
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={() => {}}>
              <Code className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Workflow Canvas */}
        <div className="flex-1 p-8">
          <div className="relative">
            {/* Start Button */}
            <div className="mb-8 flex justify-center">
              <Button className="h-32 w-32 rounded-full bg-primary text-lg font-semibold hover:bg-primary/90" onClick={() => {}}>
                <Play className="mr-2 h-6 w-6" />
                Start
              </Button>
            </div>

            {/* Workflow Nodes Grid */}
            <div className="grid grid-cols-3 gap-6">
              {workflowNodes.slice(0, 6).map((node, index) => (
                <Card key={node.id} className="bg-[#2d3142] border-gray-700">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
                      <Workflow className="h-3 w-3" />
                      <span>/ {node.type}</span>
                    </div>
                    <div className="mb-4 text-5xl font-bold">{node.value}</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Returned errors</span>
                        <div className="flex items-center gap-1">
                          <span className={node.health > 50 ? 'text-red-400' : node.health > 10 ? 'text-yellow-400' : 'text-gray-400'}>
                            {node.health}%
                          </span>
                          {node.health > 50 ? <TrendingUp className="h-3 w-3 text-red-400" /> : node.health > 10 ? <TrendingDown className="h-3 w-3 text-yellow-400" /> : null}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 flex-1 rounded ${i < Math.ceil(node.health / 20) ? node.color : 'bg-gray-700'}`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-gray-400">Health</div>
                    </div>
                    {index < 5 && (
                      <div className="mt-4 flex justify-center">
                        <ArrowDown className="h-5 w-5 text-gray-600" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Nodes */}
            <div className="mt-6 grid grid-cols-2 gap-6">
              {workflowNodes.slice(6).map((node) => (
                <Card key={node.id} className="bg-[#2d3142] border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold">{node.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Process Details */}
        <aside className="w-80 border-l border-gray-800 bg-[#252836]">
          <div className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Process details</h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-400">ID:</span>
                <span className="ml-2">109 210</span>
              </div>
              <div>
                <span className="text-gray-400">Owner:</span>
                <span className="ml-2">Ava Taylor / ava.taylor@corporate.com</span>
              </div>
              <div>
                <span className="text-gray-400">Created:</span>
                <span className="ml-2">Jan 12, 2022 / Ava Taylor</span>
              </div>
              <div>
                <span className="text-gray-400">Updated:</span>
                <span className="ml-2">Today, 14:42 / Michael Bennett</span>
              </div>
            </div>

            <Tabs defaultValue="activity" className="mt-6">
              <TabsList className="grid w-full grid-cols-3 bg-[#1a1d29]">
                <TabsTrigger value="activity" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400">
                  Activity
                </TabsTrigger>
                <TabsTrigger value="statistics">Statistics</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
              </TabsList>
              <TabsContent value="activity" className="mt-4">
                <ScrollArea className="h-[500px]">
                  <div className="space-y-6">
                    <div>
                      <div className="mb-3 text-xs text-gray-400">January 12, 2022 / 3 activities</div>
                      <div className="space-y-4">
                        {activities.slice(0, 3).map((activity, index) => (
                          <div key={index} className="flex gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className={`${activity.color} text-xs`}>
                                {activity.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="text-sm">
                                <span className="font-medium">{activity.user}</span>
                                <span className="text-gray-400"> {activity.action}</span>
                              </div>
                              <div className="text-xs text-gray-500">{activity.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-3 text-xs text-gray-400">January 13, 2022 / 7 activities</div>
                      <div className="space-y-4">
                        {activities.slice(3).map((activity, index) => (
                          <div key={index} className="flex gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className={`${activity.color} text-xs`}>
                                {activity.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="text-sm">
                                <span className="font-medium">{activity.user}</span>
                                <span className="text-gray-400"> {activity.action}</span>
                              </div>
                              <div className="text-xs text-gray-500">{activity.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="statistics">
                <p className="text-sm text-gray-400">Statistics will appear here</p>
              </TabsContent>
              <TabsContent value="chat">
                <p className="text-sm text-gray-400">Chat will appear here</p>
              </TabsContent>
            </Tabs>
          </div>
        </aside>
      </div>
    </div>
  );
}
