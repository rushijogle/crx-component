import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CruxTypeaheadComponent } from './crux-typeahead.component';

@NgModule({
  declarations: [ CruxTypeaheadComponent ],
  exports: [ CruxTypeaheadComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomModule {}