import {Entity} from './entity';
import {Person} from './person';
import {Line} from './line';
import {Stop} from './stop';

export class Bus extends Entity {
  constructor(id: number) {
    super(id);
    this.passengers = [];
  }

  maxCapacity: number;
  passengers: Person[];
  currentLine: Line;
  currentStop: Stop;
  currentStopIndex: number;

  reset(): void {
  }

  changeColor(): void {
  }

  getPassengersGetOn(): void {
  }

  addPeople(person: Person): void {
    this.passengers.push(person);
  }

  removePeople(): void {

  }

}
