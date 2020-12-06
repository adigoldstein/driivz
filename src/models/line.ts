import {Entity} from './entity';
import {Stop} from './stop';
import {Bus} from './bus';

export class Line extends Entity {
  constructor(id: number) {
    super(id);
  }

  name: string;
  stops: Stop[];
  buses: Bus[];
  onSim: boolean;
  interval: number;

  reset(): void {
    console.log('reset');
  }
}
