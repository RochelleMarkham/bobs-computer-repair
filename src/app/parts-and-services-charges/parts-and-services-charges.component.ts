import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parts-and-services-charges',
  templateUrl: './parts-and-services-charges.component.html',
  styleUrls: ['./parts-and-services-charges.component.css']
})
export class PartsAndServicesChargesComponent implements OnInit {

  @Input() name: string;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
