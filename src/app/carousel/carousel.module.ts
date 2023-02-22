import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  exports:[
    CarouselComponent,
  ],
  imports: [
    NgbAlertModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CarouselModule { }
