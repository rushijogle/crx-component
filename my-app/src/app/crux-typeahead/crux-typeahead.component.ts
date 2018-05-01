import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map,debounceTime} from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatAutocompleteSelectedEvent } from '@angular/material';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}
@Component({
  selector: 'app-crux-typeahead',
  templateUrl: './crux-typeahead.component.html',
  styleUrls: ['./crux-typeahead.component.css']
})
export class CruxTypeaheadComponent implements OnInit {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  @Output() valueChange = new EventEmitter();
  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];
  @ViewChild('trigger', { read: MatAutocompleteTrigger }) trigger;
  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        debounceTime(1000),
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  test(state){
    this.valueChange.emit(state);
    console.log(this.trigger)
  }

  clickhere(){
    this.trigger.openPanel();
  }

  ngOnInit() {
 
  }

}
