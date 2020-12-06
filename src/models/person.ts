import {Entity} from './entity';

export class Person extends Entity {
  constructor(id: number) {
    super(id);
  }

  line: number;
  from: number;
  to: number;
}
