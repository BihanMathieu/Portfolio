import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports:[
    NavbarComponent,
  ],
  imports: [
    NgbAlertModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class NavbarModule { }
