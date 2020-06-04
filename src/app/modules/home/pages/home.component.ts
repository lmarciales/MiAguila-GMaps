import { Component, OnInit } from '@angular/core';
import { DefaultRoute } from '../../../data/schema/default-route';
import { RestService } from '../../../data/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public defaultRoute: DefaultRoute;

  public rideView: boolean;

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

    this.rideView = true;
    this.getDefaultRouteData();
  }

  ngOnInit(): void {}

  public getRideViewToggle(toggle: boolean) {
    this.rideView = toggle;
  }

  public getDefaultRouteData() {
    this.rest.getDefaultRouteData().subscribe((res) => {
      this.defaultRoute = res;
    });
  }
}
