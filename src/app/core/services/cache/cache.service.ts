import { Injectable } from '@angular/core';
import { GlobalConfig } from 'src/app/config/app.config';

/**
 * CacheService service class is a generic class for cache handling
 */
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  /**
   * Sets countries cache
   * @param countriesDataList
   */
  setCountriesCache(countriesDataList: any) {
    localStorage.setItem(
      GlobalConfig.countriesCacheKey,
      JSON.stringify(countriesDataList)
    );
  }

  /**
   * Gets countries cache
   * @returns countries cache
   */
  getCountriesCache() {
    return (
      JSON.parse(
        localStorage.getItem(GlobalConfig.countriesCacheKey) as string
      ) || null
    );
  }
}
