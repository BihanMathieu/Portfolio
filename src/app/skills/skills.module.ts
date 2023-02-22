import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [
    SkillsComponent,
  ],
  exports:[
    SkillsComponent,
  ],
  imports: [
    NgbAlertModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SkillsModule { }
