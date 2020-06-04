import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { NavLink } from '../../../../data/schema/nav-link';
import { UserData } from '../../../../data/schema/user-data';
import { RestService } from '../../../../data/services/rest.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public navLinksList: NavLink[];
  public userData: UserData;

  public activeNav: number;

  public mobileView: boolean;

  @Output() toggleRideView = new EventEmitter<boolean>();

  constructor(private rest: RestService) {
    this.userData = {
      id: 0,
      user_name: '',
      user_desc: '',
      user_img: '',
    };

    this.getNavLinkData();
    this.getUserData();

    this.activeNav = 1;

    this.mobileView = false;
    this.getScreenSize();
  }

  ngOnInit(): void {}

  public getNavLinkData() {
    this.rest.getNavLinksData().subscribe((res) => {
      this.navLinksList = res;
    });
  }

  public getUserData() {
    this.rest.getUserData().subscribe((res) => {
      this.userData = res;
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

  @HostListener('window:resize', ['$event'])
  public getScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this.mobileView = true;
    }
  }

  public toggleMobileMenu() {
    this.mobileView = !this.mobileView;
  }
}
