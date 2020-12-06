import {Entity} from './entity';
import {Bus} from './bus';

export class Event extends Entity {
  constructor(id: number) {
    super(id);
  }

  time: string;
  action: string;
  bus: Bus;

  message(): void {
    console.log('message');
  }

  execute(): void {
    console.log('execute');
  }
}
