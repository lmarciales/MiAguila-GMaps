import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public rideView: boolean;

  constructor() {
    this.rideView = true;
  }

  ngOnInit(): void {}

  public getRideViewToggle(toggle: boolean) {
    this.rideView = toggle;
  }
}
