import * as buildUrl from 'build-url';
import { QueryParamsType } from 'src/app/models/shared.model';

export default class Url {
  static make(url: string, queryParams: QueryParamsType) {
    return buildUrl(url, {
      queryParams: queryParams,
    });
  }
}
