import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './pages/destination/destination.component';
import { OriginComponent } from './pages/origin/origin.component';

const routes: Routes = [
  {
    path: 'origin',
    component: OriginComponent,
  },
  {
    path: 'destination',
    component: DestinationComponent,
  },
  {
    path: '',
    redirectTo: 'ride/origin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
