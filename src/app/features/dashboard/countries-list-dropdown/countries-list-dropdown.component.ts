import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DashboardConfig, GlobalConfig } from 'src/app/config/app.config';
import { CacheService, DashboardService } from 'src/app/core';
import { DashboardContentModel } from 'src/app/models';

/**
 * CountriesListDropdownComponent component to display countries list dropdown with search option
 */
@Component({
  selector: 'app-countries-list-dropdown',
  templateUrl: './countries-list-dropdown.component.html',
  styleUrls: ['./countries-list-dropdown.component.scss'],
})
export class CountriesListDropdownComponent implements OnInit {
  @Input() content: DashboardContentModel;
  @Output() onCountryChange = new EventEmitter<string>();

  countries: string[] = [];
  selectedCountries: string[] = [];

  dashboardServiceSubscription: Subscription;

  constructor(
    public dashboardService: DashboardService,
    private _snackBar: MatSnackBar,
    private cacheService: CacheService
  ) {}

  ngOnInit(): void {
    this.getCountriesListData();
  }

  /**
   * Gets countries list data
   */
  getCountriesListData() {
    const countriesCache = this.cacheService.getCountriesCache();
    if (countriesCache) {
      this.countries = countriesCache;
    } else {
      this.dashboardServiceSubscription = this.dashboardService
        .listCountries()
        .subscribe({
          next: (response) => {
            try {
              this.countries = [
                DashboardConfig.allCountriesString,
                ...response.response,
              ];
              this.cacheService.setCountriesCache(this.countries);
            } catch (error) {
              this.showSnackBar(error);
            }
          },
          error: (error) => {
            this.showSnackBar(error);
          },
        });
    }
  }

  /**
   * On country option change emits country value
   * @param country
   */
  countryChange(country: string) {
    this.onCountryChange.emit(country);
  }

  /**
   * Shows snack bar to handle error response
   * @param error
   */
  showSnackBar(error) {
    this._snackBar.open(GlobalConfig.SnackBarErrorMessage);
    console.error(error);
  }

  ngOnDestroy(): void {
    this.dashboardServiceSubscription?.unsubscribe();
  }
}
