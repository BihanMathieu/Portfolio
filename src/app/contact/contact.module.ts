import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  exports:[
    ContactComponent,
  ],
  imports: [
    NgbAlertModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ContactModule { }
