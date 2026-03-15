import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, MoreHorizontal, FileText, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  { name: 'Lorem ipsum case', manager: 'Drew Perkins', initials: 'DP', color: 'bg-orange-500' },
  { name: 'Dolor sit amet case', manager: 'Jane Doe', initials: 'JD', color: 'bg-purple-500' },
  { name: 'Ipsum case lorem', manager: 'Gintaras', initials: 'GA', color: 'bg-teal-500' },
  { name: 'Case sit amet lore', manager: 'Emily Hayton', initials: 'EH', color: 'bg-yellow-500' },
  { name: 'Acit dolor ipsum case', manager: 'Mark Spencer', initials: 'MS', color: 'bg-pink-500' }
];

const documents = [
  { name: 'Proposal: Backup & Recovery sevices', status: 'read' as const, icon: '📄' },
  { name: 'An Overdue document name', status: 'overdue' as const, icon: '📄' },
  { name: 'Another file', status: 'read' as const, icon: '📄' },
  { name: 'Outstanding file', status: 'outstanding' as const, icon: '📄' }
];

const reminders = [
  { title: 'WARE Brand Meeting', time: 'Today, 11:45 am', isNew: true },
  { title: 'Design Talk', time: 'Today, 2:30 pm', isNew: true },
  { title: 'Jacob Kowalski', time: 'Today', isNew: true },
  { title: 'Company meeting', time: 'in 2 days, 11:30 am', isNew: false },
  { title: 'WARE Brand Meeting', time: 'Tomorrow', isNew: false }
];

const employees = [
  { name: 'Jacob Kowalski', role: 'React Developer', department: 'Development', initials: 'JK', color: 'bg-blue-500' },
  { name: 'Jane Doe', role: 'Product Designer', department: 'Design', initials: 'JD', color: 'bg-purple-500' },
  { name: 'James Gray', role: 'Back-end Developer', department: 'Development', initials: 'JG', color: 'bg-teal-500' },
  { name: 'Gintaras Arstikaitis', role: 'Senior Full-stack Developer', department: 'Development', initials: 'GA', color: 'bg-green-500' },
  { name: 'Hannah Green', role: 'Designer', department: 'Design', initials: 'HG', color: 'bg-pink-500' }
];

export default function CaseManagementPage() {
  return (
    <div className="min-h-screen bg-[#1a1d29] text-white">
      {/* Top Bar */}
      <header className="border-b border-gray-800 bg-[#252836] px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Case Management Dashboard</h1>
          <Button variant="outline" size="sm" asChild>
            <Link to="/dashboard">Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="grid gap-6 p-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Your Cases */}
          <Card className="bg-[#252836] border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Your Cases</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="link" className="text-blue-400 cursor-pointer" onClick={() => alert('Viewing all cases...')}>
                    View all
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400" onClick={() => alert('Searching cases...')}>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 border-b border-gray-700 pb-2 text-sm text-gray-400">
                  <div>NAME</div>
                  <div>CASE MANAGER</div>
                </div>
                {cases.map((caseItem, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 items-center">
                    <div className="text-sm">{caseItem.name}</div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className={`${caseItem.color} text-xs`}>
                          {caseItem.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{caseItem.manager}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card className="bg-[#252836] border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Documents</CardTitle>
                <Button variant="ghost" size="icon" className="text-gray-400" onClick={() => {}}>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 grid grid-cols-3 gap-4">
                <Card className="bg-red-500/20 border-red-500/50">
                  <CardContent className="p-4 text-center">
                    <FileText className="mx-auto mb-2 h-8 w-8 text-red-400" />
                    <div className="text-sm text-gray-400">Overdue</div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-xs text-gray-400">documents</div>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-500/20 border-yellow-500/50">
                  <CardContent className="p-4 text-center">
                    <FileText className="mx-auto mb-2 h-8 w-8 text-yellow-400" />
                    <div className="text-sm text-gray-400">Outstanding</div>
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-xs text-gray-400">documents</div>
                  </CardContent>
                </Card>
                <Card className="bg-blue-500/20 border-blue-500/50">
                  <CardContent className="p-4 text-center">
                    <FileText className="mx-auto mb-2 h-8 w-8 text-blue-400" />
                    <div className="text-sm text-gray-400">Total Read</div>
                    <div className="text-2xl font-bold">27</div>
                    <div className="text-xs text-gray-400">documents</div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-400">LATEST DOCUMENTS</h4>
                <div className="space-y-2">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg bg-[#1a1d29] p-3">
                      <div className="flex items-center gap-3">
                        <FileText className={`h-4 w-4 ${
                          doc.status === 'overdue' ? 'text-red-400' :
                          doc.status === 'outstanding' ? 'text-yellow-400' :
                          'text-blue-400'
                        }`} />
                        <span className="text-sm">{doc.name}</span>
                      </div>
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400" onClick={() => {}}>
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Employees */}
          <Card className="bg-[#252836] border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Employees</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="link" className="text-blue-400" onClick={() => {}}>
                    View all
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400" onClick={() => {}}>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {employees.map((employee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={`${employee.color} text-sm`}>
                        {employee.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{employee.name}</div>
                      <div className="text-sm text-gray-400">
                        {employee.role} • <Badge variant="secondary" className="bg-green-500/20 text-green-400">{employee.department}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Reminders */}
          <Card className="bg-[#252836] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {reminders.map((reminder, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-lg bg-[#1a1d29] p-3">
                      <Clock className="h-4 w-4 text-blue-400 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{reminder.title}</span>
                          {reminder.isNew && (
                            <Badge className="bg-blue-500 text-xs">new</Badge>
                          )}
                        </div>
                        <div className="text-xs text-gray-400">{reminder.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Calendar */}
          <Card className="bg-[#252836] border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Calendar</CardTitle>
                <Button variant="link" className="text-blue-400" onClick={() => {}}>
                  View Calendar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">March 2023</h3>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {}}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {}}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mb-3 flex gap-2 text-xs">
                <Badge className="bg-purple-500/20 text-purple-400">Public Holiday</Badge>
                <Badge className="bg-green-500/20 text-green-400">Vacation</Badge>
                <Badge className="bg-pink-500/20 text-pink-400">Birthday</Badge>
                <Badge className="bg-red-500/20 text-red-400">Deadline</Badge>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                  <div key={day} className="text-gray-400">{day}</div>
                ))}
                {[...Array(31)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center rounded ${
                      i === 8 ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Shout Out */}
          <Card className="bg-[#252836] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Shout Out</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">No shout outs yet</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
