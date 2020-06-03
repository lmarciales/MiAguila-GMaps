import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import * as fromComponents from './components';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { OriginComponent } from './pages/origin/origin.component';
import { DestinationComponent } from './pages/destination/destination.component';

@NgModule({
  declarations: [HomeComponent, ...fromComponents.components, OriginComponent, DestinationComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [...fromComponents.components],
})
export class HomeModule {}
