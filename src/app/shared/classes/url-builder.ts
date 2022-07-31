import { QueryStringParameters } from './query-string-parameters';

/**
 * UrlBuilder class patches the base url,endpoints and query strings together.
 * acts as a generic url builder class for all the http calls.
 */
export class UrlBuilder {
  public url: string;
  public queryString: QueryStringParameters;
  constructor(
    private baseUrl: string,
    private api_endpoint: string,
    queryString?: QueryStringParameters
  ) {
    this.url = [baseUrl, api_endpoint].join('/');
    this.queryString = queryString || new QueryStringParameters();
  }

  /**
   * This method appends the query strings to the url.
   * @return url This method returns a complete url with query params.
   */
  public toString(): string {
    try {
      const qs: string = this.queryString ? this.queryString.toString() : '';
      return qs ? `${this.url}?${qs}` : this.url;
    } catch (error) {
      console.error(error);
    }
  }
}
