import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LayoutsContentModel } from 'src/app/models';

/**
 * AppLayoutComponent component to render initial app layout
 */
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  content: LayoutsContentModel;

  contentSubscription: Subscription;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.resolveI18nContent();
  }

  /**
   * Resolves i18n content
   */
  resolveI18nContent() {
    this.contentSubscription = this.translate
      .get('layouts')
      .subscribe((content) => (this.content = content));
  }

  ngOnDestroy(): void {
    this.contentSubscription?.unsubscribe();
  }
}
