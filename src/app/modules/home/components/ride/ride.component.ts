import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultRoute } from '../../../../data/schema/default-route';
import { FavoriteList } from '../../../../data/schema/favorite-list';
import { RideProfile } from '../../../../data/schema/ride-profile';
import { StepsData } from '../../../../data/schema/steps-data';
import { RestService } from '../../../../data/services/rest.service';

/**
 * Luis Felipe Marciales Piñeros (fmarcialesp@gmail.com)
 *
 * Ride component: Shows the view where the user can choose the profile type, address and favorites.
 */
@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss'],
})
export class RideComponent implements OnInit {
  /**
   * Data for profile info
   */
  public rideProfile: RideProfile[];

  /**
   * Data for step info
   */
  public stepData: StepsData[];

  /**
   * Data for favorite info
   */
  public favoriteList: FavoriteList[];

  /**
   * Flag for the current step
   */
  public stepNumber: number;

  /**
   * Get the route that is drawn in the map.
   */
  @Input() defaultRoute: DefaultRoute;

  @Output() newRoute = new EventEmitter<DefaultRoute>();

  constructor(private router: Router, private rest: RestService) {
    router.navigate(['ride/origin']);
    this.getRideProfileData();
    this.getStepData();
    this.getFavoriteListaData();
    this.stepNumber = 1;
  }

  ngOnInit(): void {}

  /**
   * Get the profile data
   */
  public getRideProfileData() {
    this.rest.getRideProfileData().subscribe((res) => {
      this.rideProfile = res;
    });
  }

  /**
   * Get the step data
   */
  public getStepData() {
    this.rest.getStepData().subscribe((res) => {
      this.stepData = res;
    });
  }

  /**
   * Get the favorite list data
   */
  public getFavoriteListaData() {
    this.rest.getFavoriteListData().subscribe((res) => {
      this.favoriteList = res;
    });
  }

  /**
   * Function to switch between steps
   * @param stepNumber Step number from selected step
   * @param stepRouter Step router from selected step
   */
  public toggleStep(stepNumber: number, stepRouter: string) {
    if (stepRouter.length > 0) {
      this.stepNumber = stepNumber;
      this.router.navigate([stepRouter]);
    }
  }

  /**
   * Function to send a new address to the map draw.
   * @param favorite Favorite address selected
   */
  public changeDirection(favorite: FavoriteList) {
    if (this.stepNumber === 1) {
      this.defaultRoute.origin = {
        lat: favorite.lat,
        lng: favorite.lng,
      };
    } else {
      this.defaultRoute.destination = {
        lat: favorite.lat,
        lng: favorite.lng,
      };
    }
    this.newRoute.emit(this.defaultRoute);
  }
}
