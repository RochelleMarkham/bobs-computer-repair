import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-summary',
  templateUrl: './service-summary.component.html',
  styleUrls: ['./service-summary.component.css']
})
export class ServiceSummaryComponent {

  @Input() name: string;
  @Input() price: number;

  constructor() {}

}
