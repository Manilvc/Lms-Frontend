import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/auth/pages/login/login.page').then((m) => m.LoginPage) },
  { path: 'signup', loadComponent: () => import('./features/auth/pages/signup/signup.page').then((m) => m.SignupPage) },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: '',
    loadComponent: () => import('./shell/app-shell.component').then((m) => m.AppShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'courses',
        loadComponent: () => import('./features/courses/courses.page').then((m) => m.CoursesPage),
      },
      {
        path: 'events',
        loadComponent: () => import('./features/events/events.page').then((m) => m.EventsPage),
      },
      {
        path: 'my-training',
        loadComponent: () => import('./features/my-training/my-training.page').then((m) => m.MyTrainingPage),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
