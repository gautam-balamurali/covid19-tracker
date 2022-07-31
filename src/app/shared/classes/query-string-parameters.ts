import { QueryParams } from 'src/app/models/shared.model';

/**
 * QueryStringParameters class is a generic helper class to process and combine
 * all the query params together.
 * acts as a generic helper class for combining all the query params.
 */
export class QueryStringParameters {
  private paramsAndValues: string[];

  constructor() {
    this.paramsAndValues = [];
  }

  /**
   * This method processes all the query params compairing with the original query params and merges into one.
   * @param queryStrings This param contains new or modified query strings.
   * @param CONFIG_PARAMS This param contains original query strings.
   * @return Object This method returns an object literal query param key values.
   */
  public static processQueryParams(queryStrings: QueryParams, CONFIG_PARAMS?) {
    try {
      let queryParams = {};
      if (typeof queryStrings !== 'undefined') {
        if (CONFIG_PARAMS?.length) {
          queryParams = { ...CONFIG_PARAMS[0], ...queryStrings };
        } else {
          queryParams = queryStrings;
        }
        return queryParams;
      } else if (CONFIG_PARAMS?.length) {
        return CONFIG_PARAMS[0];
      } else return null;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Helpers function
   * @param CONFIG_PARAMS
   */
  public static helperFunction(CONFIG_PARAMS) {
    try {
      let keys = [];
      CONFIG_PARAMS?.forEach((el) => {
        keys = Object.keys(el);
      });
      return keys;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Pushs query string parameters
   * @param querParams
   */
  public push(querParams: QueryParams): void {
    try {
      for (const key in querParams) {
        this.paramsAndValues.push([key, querParams[key]].join('='));
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Converts to string of query string parameters
   */
  public toString = (): string => this.paramsAndValues.join('&');
}
