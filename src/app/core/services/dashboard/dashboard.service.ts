import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from 'src/app/config/api-constants';
import { DashboardConfig } from 'src/app/config/app.config';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { ApiEndpointsService } from '../api-http/api-endpoints.service';
import { ApiHttpService } from '../api-http/api-http.service';

/**
 *DashboardService service class is a generic class to handle all the services related to dashboard
 */
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  /**
   * Lists countries
   * @returns countries
   */
  public listCountries(): Observable<any> {
    return this.apiHttpService.get(
      this.apiEndpointsService.createUrl(
        ApiConstants.API_ENDPOINT_CONSTANTS.countries_list_api
      )
    );
  }

  /**
   * Gets current statistics
   * @param [country]
   * @returns current statistics
   */
  public getCurrentStatistics(country?: string): Observable<any> {
    let queryStrings = {};
    if (
      country &&
      country.toLowerCase() !== DashboardConfig.allCountriesString.toLowerCase()
    ) {
      queryStrings = { country: country };
    }
    return this.apiHttpService.get(
      this.apiEndpointsService.createUrlWithQueryParameters(
        ApiConstants.API_ENDPOINT_CONSTANTS.current_statistics_api,
        (params: QueryStringParameters) => {
          params.push(
            QueryStringParameters.processQueryParams(queryStrings, [])
          );
        }
      )
    );
  }

  /**
   * Gets historical statistics
   * @param [country]
   * @returns historical statistics
   */
  public getHistoricalStatistics(country?: string): Observable<any> {
    let queryStrings = {
      country: country
        ? country
        : DashboardConfig.allCountriesString.toLowerCase(),
    };
    return this.apiHttpService.get(
      this.apiEndpointsService.createUrlWithQueryParameters(
        ApiConstants.API_ENDPOINT_CONSTANTS.historical_statistics_api,
        (params: QueryStringParameters) => {
          params.push(
            QueryStringParameters.processQueryParams(queryStrings, [])
          );
        }
      )
    );
  }
}
