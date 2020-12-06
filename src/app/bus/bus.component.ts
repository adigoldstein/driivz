import {Component, Input, OnInit} from '@angular/core';
import {DispatchService} from '../../services/dispatch.service';
import {Bus} from '../../models/bus';
import {Person} from '../../models/person';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {
  @Input() bus: Bus;

  constructor(private dispatchService: DispatchService) {
  }

  ngOnInit(): void {
  }

  addPassengersClickHandler(): void {
    const newPerson = new Person(Math.floor(Math.random() * Math.floor(99999)));
    this.bus.addPeople(newPerson);
    this.dispatchService.dispatch(this.bus, 'goToNextStop');
  }
}
