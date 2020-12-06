import {Component} from '@angular/core';
import {Bus} from '../models/bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bus: Bus;

  constructor() {
    this.bus = new Bus(Math.floor(Math.random() * Math.floor(99999)));
  }
}
