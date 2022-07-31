import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/config/route-constants';

/**
 * HeaderComponent component to render header
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ROUTE_CONSTANTS = RouteConstants.ROUTES;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * Navigates to dashboard
   */
  navigateToDashboard() {
    this.router.navigate([`/${this.ROUTE_CONSTANTS.DASHBOARD}`]);
  }
}
