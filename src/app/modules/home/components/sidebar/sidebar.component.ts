import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavLink } from '../../../../data/schema/nav-link';
import { RestService } from '../../../../data/services/rest.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public navLinksList: NavLink[];
  public activeNav: number;

  @Output() toggleRideView = new EventEmitter<boolean>();

  constructor(private rest: RestService) {
    this.getNavLinkData();
    this.activeNav = 1;
  }

  ngOnInit(): void {}

  public getNavLinkData() {
    this.rest.getNavLinksData().subscribe((res) => {
      this.navLinksList = res;
    });
  }

  public getSelectedNavItem(itemId: number) {
    this.activeNav = itemId;

    if (this.activeNav === 1) {
      this.toggleRideView.emit(true);
    } else {
      this.toggleRideView.emit(false);
    }
  }
}
