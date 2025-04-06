import { lazy } from 'react';

import { StepsLayout, ProtectedLayout } from '@/Layouts';
import { ROUTES } from '@/constants';
import GlobalComponents from "@/Pages/GlobalComponents/index.jsx";

export const APP_ROUTES = [
  {
    path: ROUTES.home,
    layout: ProtectedLayout,
    component: lazy(() => import('@/Pages/Home')),
  },
  {
    path: ROUTES.step,
    layout: StepsLayout,
    component: lazy(() => import('@/Pages/Step')),
  },
  {
    path: '/login',
    layout: null,
    component: lazy(() => import('@/Components/Login')),
  },
  {
    path: ROUTES.globalComponents,
    layout: null,
    component: lazy(()=>import('@/Pages/GlobalComponents'))
  }
];
