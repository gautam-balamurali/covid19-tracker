import { Injectable } from '@angular/core';
import { ApiConstants } from 'src/app/config/api-constants';
import { QueryStringParameters, UrlBuilder } from 'src/app/shared/classes';
import { environment } from 'src/environments/environment';

/**
 * ApiEndpointsService returns the api endpoints urls to use in services in a consistent way.
 * acts as a generic service class for all the http calls.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiEndpointsService {
  private baseUrl = `${environment.apiEndpoint}`;

  constructor(private constants: ApiConstants) {}

  /**
   * This method executed to generate url with the provided api endpoint.
   * @param api_endpoint This param contains endpoint for the api call.
   * @return url This method returns a complete url.
   */
  public createUrl(api_endpoint: string, isMockAPI: boolean = false): string {
    try {
      const urlBuilder: UrlBuilder = new UrlBuilder(
        isMockAPI ? this.constants.API_MOCK_ENDPOINT : this.baseUrl,
        api_endpoint
      );
      return urlBuilder.toString();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * This method executed to generate url with the provided api endpoint and query parameters.
   * @param api_endpoint This param contains endpoint for the api call.
   * @param queryStringHandler This param is a callback function.
   * @param pathVariable This param contains dynamic variables.
   * @param depVariable This param contains a boolean that checks if a
   * dynamic variable is a dependency or not.
   * @return url string This method returns a complete url.
   */
  public createUrlWithQueryParameters(
    api_endpoint: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void,
    pathVariable?,
    depVariable?: boolean
  ): string {
    try {
      let encodedPathVariablesUrl: string = '';
      if (pathVariable) {
        if (depVariable) {
          api_endpoint = api_endpoint?.replace(
            '${path_variable}',
            `${pathVariable?.toString()}`
          );
        } else {
          encodedPathVariablesUrl = `/${encodeURIComponent(
            pathVariable.toString()
          )}`;
        }
      }
      const urlBuilder: UrlBuilder = new UrlBuilder(
        this.baseUrl,
        `${api_endpoint}${encodedPathVariablesUrl}`
      );
      if (queryStringHandler) {
        queryStringHandler(urlBuilder.queryString);
      }
      return urlBuilder.toString();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Creates url with multiple path variables
   * @param api_endpoint
   * @param pathVariable
   * @returns url with multiple path variables
   */
  public createUrlWithMultiplePathVariables(
    api_endpoint: string,
    pathVariable: any[]
  ): string {
    try {
      let encodedPathVariablesUrl: string = '';
      pathVariable.forEach(
        (variable) =>
          (encodedPathVariablesUrl = encodedPathVariablesUrl.concat(
            `/${encodeURIComponent(variable.toString())}`
          ))
      );
      const urlBuilder: UrlBuilder = new UrlBuilder(
        this.baseUrl,
        `${api_endpoint}${encodedPathVariablesUrl}`
      );

      return urlBuilder.toString();
    } catch (error) {
      console.error(error);
    }
  }
}
