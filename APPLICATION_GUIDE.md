# OmniShowcase Application Guide

## Overview
OmniShowcase is a comprehensive UI template showcase platform featuring 9 high-fidelity screen templates for various application types including dashboards, booking platforms, management systems, and landing pages.

## Application Structure

### Home Page (/)
The landing page displays all 9 templates in a professional grid layout with:
- Hero section with application branding
- Template cards with preview images
- Category badges and technology tags
- Hover effects and smooth transitions
- Professional footer with information

### Available Templates

#### 1. ThoughtSpot Analytics (/thoughtspot)
**Category:** Dashboard
**Features:**
- Sidebar navigation with Home, Favorites, Created by me
- Monitor Alerts and SpotIQ Analysis sections
- Analytics metric cards (CQ Booked ACV: 794.9k)
- User avatar grid display
- Details panel with View, Explore, Format tabs
- Show Query toggle
- Author information and creation date

#### 2. Process Engine (/process-engine)
**Category:** Workflow
**Features:**
- Dark-themed interface
- Workflow visualization with numbered nodes
- Set Parameter, API Call, Reply to Process nodes
- Health status indicators with percentages (59%, 17%, 12%, 14%)
- Returned errors tracking
- Process details panel (ID, Owner, Created, Updated dates)
- Activity timeline with user actions
- Preview, Edit, Debug modes
- Start button for workflow execution

#### 3. Voyago Travel (/voyago)
**Category:** Booking Platform
**Features:**
- Navigation menu (Homepage, Vacation, Hotels, All In One, Car Rental)
- Location display (Kyoto, Japan)
- Hero section with journey tagline
- Search functionality for Hotels, Car Rental, Events
- Hotel cards with:
  - Star ratings (4.7/5, 4.6/5)
  - Hotel names (Sakura Haven Kyoto)
  - Amenities (Free Wi-Fi, Kitchen, Beds, Spa, Massage, Restaurant)
  - Room types and bed counts
  - Pricing per night ($180, $66, $205, $120)
- Partner logos (Booking.com, Airbnb, Expedia, Tripadvisor, Outdoorsy)

#### 4. OAD Dining (/oad)
**Category:** Review Platform
**Features:**
- Navigation (Explore, Dining Guides, Top Reviewers, Travel with OAD, Magazine)
- Main heading: "Opinionated About Dining"
- Featured restaurant carousel (Desde 1911, Nick Honey, Rome, Cracco, Alchemist)
- City Guides (16) and Country Guides (4)
- City guide cards (Roma, Barcelona, Lisbon, Santorini, Prague, Tallinn, Manchester, Paris)
- Best restaurants section with regional filters (Europe, North America, Asia)
- Restaurant rankings (555, 60, 340, 120)
- Recently Posted section
- Chef Eats section (98)

#### 5. SapaceArt Interior (/sapaceart)
**Category:** Landing Page
**Features:**
- Navigation (Products, Brands, Shop, About Us)
- Hero section: "SPACE REIMAGINED"
- Tagline about creating inspiring spaces
- Start Innovation and View Demo buttons
- Statistics display:
  - 25+ Modern Shop
  - 256+ Project Done
  - 450+ Product Available
  - 500k+ Design style
- Feature text about personalized spaces
- Interior design image gallery
- Bold typography with lime green accents

#### 6. Apparte Sales (/apparte)
**Category:** SaaS Landing
**Features:**
- Navigation (Platform, Teams, Resources, Pricing)
- Main heading: "the only solution you need to run a world-class sales organization"
- Subheading about AI-powered sales solution
- Get started and Get a demo buttons
- Rating display: 4.8/5 Based on 6,904 reviews
- GDPR Compliant badge
- Product interface mockup showing:
  - Form Submitted notification
  - Email sending interface
  - User profile card (Zaek Treme, Founder & CEO)
  - Add to sequence functionality

#### 7. Trafex Contractor (/trafex)
**Category:** Management System
**Features:**
- Top banner with quick tour invitation
- Navigation (Platform, Solutions, Resources, Pricing)
- Main heading: "Onboard, manage and pay"
- Subheading about contractor management
- Get Started and Book a demo buttons
- Dashboard preview showing:
  - Location selector (London)
  - Salary information (R$440,120 with +8.2% increase)
  - Show variances toggle
  - Pensions display ($24,675)
  - Invoice tracking (invoice-710: $370.00, invoice-711: $210.00)
- Team collaboration image

#### 8. Case Management (/case-management)
**Category:** Dashboard
**Features:**
- Dark-themed interface with multiple widgets:
  - **Your Cases Widget:** Case list with names and managers
  - **Documents Widget:** Status categories (Overdue: 3, Outstanding: 24, Total Read: 27)
  - **Reminders Widget:** Upcoming meetings and events with timestamps
  - **Employees Widget:** Team member list with roles and departments
  - **Calendar Widget:** March 2023 calendar with event indicators
  - **Shout Out Widget:** Team recognition section
- Search functionality across widgets
- View all options for expandable sections

#### 9. Tasking Project (/tasking)
**Category:** Project Management
**Features:**
- Left sidebar navigation:
  - Tasking logo with airplane icon
  - Greeting: "Hello 👋 Daniel"
  - Dashboard, My board (2 notifications), Timeline, Schedule (4 notifications), Settings
  - Group Chat with recent messages
- Main dashboard area:
  - Date selector (23 Friday December)
  - User profile (Daniel - UI Designer)
  - Task card (16.5 hours)
  - Core teams widget (321 members)
  - Task timeline (UX Research, Mentoring, Meeting, Wireframing)
  - Task Analysis chart (72% completion)
  - Schedule calendar with user avatars
  - Time tracker (08:32:05) with Pause and Stop buttons
  - Task for today list with progress bars (81% complete)

## Navigation

### From Home Page
Click on any template card to navigate to that specific screen.

### From Individual Pages
Each page includes a "Back" button to return to the home page.

### Direct URL Access
You can access any page directly using its URL path:
- Home: `/`
- ThoughtSpot: `/thoughtspot`
- Process Engine: `/process-engine`
- Voyago: `/voyago`
- OAD: `/oad`
- SapaceArt: `/sapaceart`
- Apparte: `/apparte`
- Trafex: `/trafex`
- Case Management: `/case-management`
- Tasking: `/tasking`

## Design Features

### Color Themes
- **Analytics Purple:** ThoughtSpot Analytics dashboard
- **Dark Theme:** Process Engine and Case Management
- **Travel Teal:** Voyago Travel booking
- **Design Lime:** SapaceArt Interior design
- **Professional Neutrals:** Apparte, Trafex, OAD

### Responsive Design
All pages are fully responsive and adapt to different screen sizes:
- Desktop (1920x1080, 1366x768, 1440x900)
- Laptop (1280x720, 1536x864)
- Mobile (375x667, 414x896, 430x932)

### Interactive Elements
- Hover effects on cards and buttons
- Smooth transitions and animations
- Interactive toggles and switches
- Clickable navigation elements
- Form inputs and controls

## Technical Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **React Router** for navigation
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components

### Components
- Cards, Buttons, Badges
- Inputs, Selects, Switches
- Avatars, Separators
- Tabs, Toggles
- Custom layouts and widgets

## Development

### Running the Application
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Features Summary

✅ 9 Complete Template Screens
✅ Professional Home Page with Template Grid
✅ Smooth Navigation Between Screens
✅ Responsive Design for All Devices
✅ Dark Mode Support (Process Engine, Case Management)
✅ Interactive UI Components
✅ Modern Design Patterns
✅ Production-Ready Code
✅ 100% Lint Compliance
✅ TypeScript Type Safety

## Copyright
© 2026 OmniShowcase. All rights reserved.
