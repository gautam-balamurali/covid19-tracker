import { Injectable } from '@angular/core';

/**
 * Route Constants file for the application.
 * acts as a config file for all Route constants.
 * list of default routes
 */
@Injectable({ providedIn: 'root' })
export class RouteConstants {
  public static readonly ROUTES = {
    DASHBOARD: 'dashboard',
    UNAUTHORIZED: 'unauthorized',
  };
}
