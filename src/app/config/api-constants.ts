import { Injectable } from '@angular/core';

/**
 * API Constants file for the application.
 * acts as a config file for all api constants.
 * apis with ${path_variable} in between(dynamic variables)
 * will be auto replaced by actual variables at runtime.
 */
@Injectable({ providedIn: 'root' })
export class ApiConstants {
  public readonly API_MOCK_ENDPOINT: string = ''; //path to 'assets/*.json' for mock api response

  public static readonly API_ENDPOINT_CONSTANTS = {
    countries_list_api: 'countries',
    current_statistics_api: 'statistics',
    historical_statistics_api: 'history',
  };
}
