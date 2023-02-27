import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [
    SkillsComponent,
  ],
  exports:[
    SkillsComponent,
  ],
  imports: [],
  providers: [],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SkillsModule { }
