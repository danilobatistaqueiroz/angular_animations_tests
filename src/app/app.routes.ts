import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'open-close', component: OpenCloseComponent },
  { path: 'animations', component: OpenCloseComponent },
  { path: '**', component: PageNotFoundComponent }
];
