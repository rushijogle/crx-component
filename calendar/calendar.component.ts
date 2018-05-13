import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
@ViewChild('picker') private picker : MatDatepicker<Date>;
@ViewChild('picker1') private picker1 :MatDatepicker<Date>;
private startDate:any;
private endDate:any;
  constructor() { }

  ngOnInit() {
    this.startDate = new Date(2011,10,10)+'dddd';
    console.log(this.picker);
    
  }

  startDateSelected(eve){
    if(!this.picker1.startAt){
      this.picker1.open();
    }
  }

  endDateSelected(eve){
    if(!this.picker.startAt){
      this.picker.open();
    }
  }

  openzal(eve){
    console.log(eve)
  }

}
