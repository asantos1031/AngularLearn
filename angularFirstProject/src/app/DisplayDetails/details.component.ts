import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-display-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
  }
)
export class DisplayDetailsComponent implements OnInit{

  showPass = false;
  totalClicks = [];

  constructor() {
  }

  TogglePassword() {
    this.showPass = !this.showPass;
    this.totalClicks.push(this.totalClicks.length + 1);
    console.log(this.totalClicks);
  }
  getColor(val: number) {
    if (val >= 5) {
      return 'blue';
    }
    return 'white';
  }

  ngOnInit() {
  }
}
