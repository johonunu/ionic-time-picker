import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  @Input() name: string;
  hours = [];
  minutes = [];

  slideOpts = {
    slidesPerView: 3,
    freeMode: true,
    freeModeSticky: true,
    centeredSlides: true,
    direction: 'vertical',
    speed: 100,
  };

  constructor() {

    for (let i = 0; i <= 23; i++){
      let hour = i.toString();
      if (hour.length === 1) {
        hour = '0' + hour;
      }
      this.hours.push(hour);
    }
    for (let i = 0; i <= 59; i++){
      let min = i.toString();
      if (min.length === 1) {
        min = '0' + min;
      }
      this.minutes.push(min);
    }
  }
  ngOnInit() {
  }
}
