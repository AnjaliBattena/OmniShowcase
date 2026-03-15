import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ThoughtSpotPage from './pages/ThoughtSpotPage';
import ProcessEnginePage from './pages/ProcessEnginePage';
import VoyagoPage from './pages/VoyagoPage';
import OADPage from './pages/OADPage';
import SapaceArtPage from './pages/SapaceArtPage';
import AppartePage from './pages/AppartePage';
import TrafexPage from './pages/TrafexPage';
import CaseManagementPage from './pages/CaseManagementPage';
import TaskingPage from './pages/TaskingPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />
  },
  {
    name: 'Login',
    path: '/login',
    element: <LoginPage />,
    visible: false
  },
  {
    name: 'ThoughtSpot Analytics',
    path: '/thoughtspot',
    element: <ThoughtSpotPage />
  },
  {
    name: 'Process Engine',
    path: '/process-engine',
    element: <ProcessEnginePage />
  },
  {
    name: 'Voyago Travel',
    path: '/voyago',
    element: <VoyagoPage />
  },
  {
    name: 'OAD Dining',
    path: '/oad',
    element: <OADPage />
  },
  {
    name: 'SapaceArt Interior',
    path: '/sapaceart',
    element: <SapaceArtPage />
  },
  {
    name: 'Apparte Sales',
    path: '/apparte',
    element: <AppartePage />
  },
  {
    name: 'Trafex Contractor',
    path: '/trafex',
    element: <TrafexPage />
  },
  {
    name: 'Case Management',
    path: '/case-management',
    element: <CaseManagementPage />
  },
  {
    name: 'Tasking Project',
    path: '/tasking',
    element: <TaskingPage />
  }
];

export default routes;
