/**
 * Global configuration for the application, any global configurations will
 * come under GlobalConfig class.
 */
export class GlobalConfig {
  public static readonly countriesCacheKey: string = 'countries';
  public static readonly SnackBarErrorMessage =
    'Something went wrong. Please try again later.';
}

export class DashboardConfig {
  public static readonly allCountriesString: string = 'All';

  public static readonly GoogleChartTypeDataTable = [['Country', 'Total']];
  public static readonly GeoChartTypeOptions = {
    colorAxis: {
      colors: [
        '#f00000',
        '#7e0101',
        '#7e0101',
        '#7e0101',
        '#000000',
        '#000000',
        '#000000',
      ],
    },
    backgroundColor: '#add8e6',
    datalessRegionColor: '#f8bbd0',
    defaultColor: '#f5f5f5',
    height: 500,
    keepAspectRatio: true,
  };
  public static readonly PieChartTypeOptions = {
    height: 500,
    width: 700,
    backgroundColor: '#add8e6',
    animation: {
      duration: 1000,
      easing: 'out',
    },
    is3D: true,
  };
  public static readonly PieChartTypeMobileBrowserOptions = {
    height: 150,
    width: 300,
    backgroundColor: '#fff',
    animation: {
      duration: 1000,
      easing: 'out',
    },
    is3D: true,
  };

  public static readonly USA = 'USA';
  public static readonly United_States = 'United States';
  public static readonly UAE = 'UAE';
  public static readonly United_Arab_Emirates = 'United Arab Emirates';

  public static readonly MonthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}
