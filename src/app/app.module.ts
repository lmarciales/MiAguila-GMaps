import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './modules/home/pages/home.component';

@NgModule({
  declarations: [AppComponent, HomeLayoutComponent, SidebarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
