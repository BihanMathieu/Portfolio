import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';


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
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ContactModule { }
