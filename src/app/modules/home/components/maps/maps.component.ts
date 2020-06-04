import { Component, Input, OnInit } from '@angular/core';
import { AddressRoute, DefaultRoute } from '../../../../data/schema/default-route';

/**
 * Luis Felipe Marciales Piñeros (fmarcialesp@gmail.com)
 *
 * Map component: Make all the interaction with the AGM (Angular Google Maps)
 */
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  /**
   * Get the route to draw in the map
   */
  @Input() defaultRoute: DefaultRoute;

  // Map configurations
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
