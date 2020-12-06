import {Entity} from './entity';
import {Person} from './person';

export class Stop extends Entity {
  constructor(id: number) {
    super(id);
  }

  name: string;
  location: number;
  passengers: Person[];

  showPeople(): void {
  }
}
