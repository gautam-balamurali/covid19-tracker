import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * AppComponent component is the root component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'covid19-tracker';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
