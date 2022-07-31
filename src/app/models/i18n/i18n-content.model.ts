export interface I18nContentModel {
  dashboard: DashboardContentModel;
  unauthorized: UnauthorizedContentModel;
  layouts: LayoutsContentModel;
}

export interface DashboardContentModel {
  select_country_label: string;
  historical_statistics_title: string;
  statistics_charts_map_title: string;
  statistics_charts_pie_chart_title: string;
}

export interface LayoutsContentModel {
  header_label: string;
  footer_label: string;
}

export interface UnauthorizedContentModel {
  unauthorized_status_code: string;
}
