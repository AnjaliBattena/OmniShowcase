// ThoughtSpot Analytics Types
export interface AnalyticsCard {
  id: string;
  title: string;
  value: string;
  source: string;
  author: {
    name: string;
    avatar: string;
  };
  color: 'green' | 'purple';
}

// Process Engine Types
export interface WorkflowNode {
  id: string;
  type: 'parameter' | 'api' | 'reply';
  label: string;
  value: number;
  health: number;
  errors: number;
}

export interface Activity {
  id: string;
  user: string;
  avatar: string;
  action: string;
  timestamp: string;
}

// Voyago Travel Types
export interface Hotel {
  id: string;
  name: string;
  image: string;
  rating: number;
  amenities: string[];
  type: string;
  beds: number;
  price: number;
}

// OAD Dining Types
export interface Restaurant {
  id: string;
  name: string;
  image: string;
  location: string;
  ranking?: number;
}

export interface CityGuide {
  id: string;
  name: string;
  image: string;
  restaurantCount: number;
}

// SapaceArt Interior Types
export interface DesignStat {
  label: string;
  value: string;
}

// Case Management Types
export interface Case {
  id: string;
  name: string;
  manager: {
    name: string;
    initials: string;
    color: string;
  };
}

export interface Document {
  id: string;
  name: string;
  status: 'overdue' | 'outstanding' | 'read';
}

export interface Reminder {
  id: string;
  title: string;
  time: string;
  isNew: boolean;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  initials: string;
  color: string;
}

// Tasking Project Management Types
export interface Task {
  id: string;
  title: string;
  progress: number;
  description?: string;
  dueDate?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  color: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  members: TeamMember[];
  color: string;
}
