import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBoxComponent } from './components/address-box/address-box.component';

@NgModule({
  declarations: [AddressBoxComponent],
  exports: [AddressBoxComponent],
  imports: [CommonModule],
})
export class SharedModule {}
