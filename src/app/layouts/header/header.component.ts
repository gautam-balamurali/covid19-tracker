import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/config/route-constants';
import { LayoutsContentModel } from 'src/app/models';

/**
 * HeaderComponent component to render header
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() content: LayoutsContentModel;

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
