import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AgmDirectionModule } from 'agm-direction';

import * as fromComponents from './components';

import { HomeRoutingModule } from './home-routing.module';
import { DestinationComponent } from './pages/destination/destination.component';
import { HomeComponent } from './pages/home.component';
import { OriginComponent } from './pages/origin/origin.component';

@NgModule({
  declarations: [HomeComponent, ...fromComponents.components, OriginComponent, DestinationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaIdBc8EDccZ3k_C84HvEs5toUhCK_TBE',
    }),
    AgmDirectionModule,
  ],
  exports: [...fromComponents.components],
})
export class HomeModule {}
