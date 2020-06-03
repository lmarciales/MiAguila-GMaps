import { Component, OnInit } from '@angular/core';
import { AddressRoute, DefaultRoute } from '../../../../data/schema/default-route';
import { RestService } from '../../../../data/services/rest.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  public defaultRoute: DefaultRoute;
  public initialAddress: AddressRoute;
  public initialZoom: number;

  constructor(private rest: RestService) {
    this.defaultRoute = {
      origin: {
        lat: 0,
        lng: 0,
      },
      destination: {
        lat: 0,
        lng: 0,
      },
    };

    this.initialAddress = {
      lat: 4.72,
      lng: -74.13,
    };

    this.initialZoom = 15;

    this.getDefaultRouteData();
  }

  ngOnInit(): void {}

  public getDefaultRouteData() {
    this.rest.getDefaultRouteData().subscribe((res) => {
      this.defaultRoute = res;
    });
  }
}
