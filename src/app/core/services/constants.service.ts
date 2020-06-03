import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  // Routes
  private BASE_URL = environment.url;
  private BASE_NAV_LINKS = '/nav-links';

  constructor() {}

  public getNavLinksUrl(): string {
    return this.BASE_URL + this.BASE_NAV_LINKS;
  }
}
