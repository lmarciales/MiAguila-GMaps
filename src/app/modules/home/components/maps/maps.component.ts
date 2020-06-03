import { Component, Input, OnInit } from '@angular/core';
import { AddressRoute, DefaultRoute } from '../../../../data/schema/default-route';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  @Input() defaultRoute: DefaultRoute;
  public initialAddress: AddressRoute;
  public initialZoom: number;

  constructor() {
    this.initialAddress = {
      lat: 4.72,
      lng: -74.13,
    };

    this.initialZoom = 15;
  }

  ngOnInit(): void {}
}
