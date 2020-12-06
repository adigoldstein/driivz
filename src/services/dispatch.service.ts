import {Injectable} from '@angular/core';
import {Event} from '../models/event';
import {Bus} from '../models/bus';

@Injectable({
  providedIn: 'root'
})
export class DispatchService {
  events: Event[];

  constructor() {
    this.events = [];
  }

  dispatch(bus: Bus, action: string): void {
    const newEvent = new Event(Math.floor(Math.random() * Math.floor(99999)));
    newEvent.action = action;
    newEvent.bus = bus;
    newEvent.time = '5';

    alert('The event was dispatched successfully.');
  }
}
