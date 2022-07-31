import { Component, Input, OnInit } from '@angular/core';
import { LayoutsContentModel } from 'src/app/models';

/**
 * FooterComponent component to render footer
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() content: LayoutsContentModel;

  currentYear: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
