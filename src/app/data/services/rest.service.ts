import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from '@core/services/constants.service';
import { Observable } from 'rxjs';
import { NavLink } from '../schema/nav-link';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  // Endpoints
  private readonly NAV_LINKS_URL: string;

  constructor(private http: HttpClient, private consts: ConstantsService) {
    this.NAV_LINKS_URL = consts.getNavLinksUrl();
  }

  public getNavLinksData(): Observable<NavLink[]> {
    return this.http.get<NavLink[]>(this.NAV_LINKS_URL);
  }
}
