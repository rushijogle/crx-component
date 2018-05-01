import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruxTypeaheadComponent } from './crux-typeahead.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
describe('CruxTypeaheadComponent', () => {
  let component: CruxTypeaheadComponent;
  let fixture: ComponentFixture<CruxTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruxTypeaheadComponent,MatAutocompleteModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruxTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
