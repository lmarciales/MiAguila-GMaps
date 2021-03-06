import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from '@core/services/constants.service';
import { Observable } from 'rxjs';
import { DefaultRoute } from '../schema/default-route';
import { FavoriteList } from '../schema/favorite-list';
import { NavLink } from '../schema/nav-link';
import { RideProfile } from '../schema/ride-profile';
import { StepsData } from '../schema/steps-data';
import { UserData } from '../schema/user-data';

/**
 * Luis Felipe Marciales Piñeros (fmarcialesp@gmail.com)
 *
 * Service that make all the calls to the rest services.
 */
@Injectable({
  providedIn: 'root',
})
export class RestService {
  // ------------------- Endpoints -------------------
  private readonly NAV_LINKS_URL: string;
  private readonly USER_DATA_URL: string;
  private readonly RIDE_PROFILE_URL: string;
  private readonly STEP_DATA_URL: string;
  private readonly FAVORITE_LIST_URL: string;
  private readonly DEFAULT_ROUTE_URL: string;

  constructor(private http: HttpClient, private consts: ConstantsService) {
    this.NAV_LINKS_URL = consts.getNavLinksUrl();
    this.USER_DATA_URL = consts.getUserDataUrl();
    this.RIDE_PROFILE_URL = consts.getRideProfileUrl();
    this.STEP_DATA_URL = consts.getStepDataUrl();
    this.FAVORITE_LIST_URL = consts.getFavoriteListUrl();
    this.DEFAULT_ROUTE_URL = consts.getDefaultRouteUrl();
  }

  // ------------------- Endpoints Calls -------------------
  public getNavLinksData(): Observable<NavLink[]> {
    return this.http.get<NavLink[]>(this.NAV_LINKS_URL);
  }

  public getUserData(): Observable<UserData> {
    return this.http.get<UserData>(this.USER_DATA_URL);
  }

  public getRideProfileData(): Observable<RideProfile[]> {
    return this.http.get<RideProfile[]>(this.RIDE_PROFILE_URL);
  }

  public getStepData(): Observable<StepsData[]> {
    return this.http.get<StepsData[]>(this.STEP_DATA_URL);
  }

  public getFavoriteListData(): Observable<FavoriteList[]> {
    return this.http.get<FavoriteList[]>(this.FAVORITE_LIST_URL);
  }

  public getDefaultRouteData(): Observable<DefaultRoute> {
    return this.http.get<DefaultRoute>(this.DEFAULT_ROUTE_URL);
  }
}
