import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as fromComponents from './components';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';

@NgModule({
  declarations: [HomeComponent, ...fromComponents.components],
  imports: [CommonModule, HomeRoutingModule],
  exports: [...fromComponents.components],
})
export class HomeModule {}
