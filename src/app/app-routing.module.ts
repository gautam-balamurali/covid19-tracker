import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConstants } from './config/route-constants';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UnauthorizedComponent } from './features/unauthorized/unauthorized.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: RouteConstants.ROUTES.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: RouteConstants.ROUTES.DASHBOARD,
        component: DashboardComponent,
      },
      {
        path: RouteConstants.ROUTES.UNAUTHORIZED,
        component: UnauthorizedComponent,
      },
      {
        path: '**',
        redirectTo: RouteConstants.ROUTES.DASHBOARD,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
