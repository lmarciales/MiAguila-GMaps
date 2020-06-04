import { Injectable } from '@angular/core';
import { environment } from '@env';

/**
 * Luis Felipe Marciales Piñeros (fmarcialesp@gmail.com)
 *
 * Utility operations for Constants management.
 * Here you can see endpoints, shared text from services, views and components.
 */
@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  // ------------------- Routes -------------------
  private BASE_URL = environment.url;
  private BASE_NAV_LINKS = '/nav-links';
  private BASE_USER_DATA = '/user-data';
  private BASE_RIDE_PROFILE = '/ride-profile';
  private BASE_STEPS_DATA = '/steps-data';
  private BASE_FAVORITE_LIST = '/favorite-list';
  private BASE_DEFAULT_ROUTE = '/default-route';

  constructor() {}

  // ------------------- Routes Endpoints -------------------
  public getNavLinksUrl(): string {
    return this.BASE_URL + this.BASE_NAV_LINKS;
  }

  public getUserDataUrl(): string {
    return this.BASE_URL + this.BASE_USER_DATA;
  }

  public getRideProfileUrl(): string {
    return this.BASE_URL + this.BASE_RIDE_PROFILE;
  }

  public getStepDataUrl(): string {
    return this.BASE_URL + this.BASE_STEPS_DATA;
  }

  public getFavoriteListUrl(): string {
    return this.BASE_URL + this.BASE_FAVORITE_LIST;
  }

  public getDefaultRouteUrl(): string {
    return this.BASE_URL + this.BASE_DEFAULT_ROUTE;
  }
}
