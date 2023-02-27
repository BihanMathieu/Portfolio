import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports:[
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class NavbarModule { }
