import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteList } from '../../../../data/schema/favorite-list';
import { RideProfile } from '../../../../data/schema/ride-profile';
import { StepsData } from '../../../../data/schema/steps-data';
import { RestService } from '../../../../data/services/rest.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss'],
})
export class RideComponent implements OnInit {
  public rideProfile: RideProfile[];
  public stepData: StepsData[];
  public favoriteList: FavoriteList[];
  public stepNumber: number;

  constructor(private router: Router, private rest: RestService) {
    router.navigate(['ride/origin']);
    this.getRideProfileData();
    this.getStepData();
    this.getFavoriteListaData();
    this.stepNumber = 1;
  }

  ngOnInit(): void {}

  public getRideProfileData() {
    this.rest.getRideProfileData().subscribe((res) => {
      this.rideProfile = res;
    });
  }

  public getStepData() {
    this.rest.getStepData().subscribe((res) => {
      this.stepData = res;
    });
  }

  public getFavoriteListaData() {
    this.rest.getFavoriteListData().subscribe((res) => {
      this.favoriteList = res;
    });
  }

  public toggleStep(stepNumber: number, stepRouter: string) {
    if (stepRouter.length > 0) {
      this.stepNumber = stepNumber;
      this.router.navigate([stepRouter]);
    }
  }
}
