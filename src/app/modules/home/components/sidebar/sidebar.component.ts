import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { NavLink } from '../../../../data/schema/nav-link';
import { UserData } from '../../../../data/schema/user-data';
import { RestService } from '../../../../data/services/rest.service';

/**
 * Luis Felipe Marciales Piñeros (fmarcialesp@gmail.com)
 *
 * Sidebar component: Shows the user data and important links.
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  /**
   * User data info
   */
  public userData: UserData;

  /**
   * Nav link info
   */
  public navLinksList: NavLink[];

  /**
   * Flag for the active item link
   */
  public activeNav: number;

  /**
   * Flag for the responsive view
   */
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

  /**
   * Get the nav link data
   */
  public getNavLinkData() {
    this.rest.getNavLinksData().subscribe((res) => {
      this.navLinksList = res;
    });
  }

  /**
   * Get the user data
   */
  public getUserData() {
    this.rest.getUserData().subscribe((res) => {
      this.userData = res;
    });
  }

  /**
   * Get the item selected from nav links
   * @param itemId Item list selected
   */
  public getSelectedNavItem(itemId: number) {
    this.activeNav = itemId;

    if (this.activeNav === 1) {
      this.toggleRideView.emit(true);
    } else {
      this.toggleRideView.emit(false);
    }
  }

  /**
   * Get the window size for the current screen
   */
  @HostListener('window:resize', ['$event'])
  public getScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this.mobileView = true;
    }
  }

  /**
   * Toggle view depending on the window size
   */
  public toggleMobileMenu() {
    this.mobileView = !this.mobileView;
  }
}
