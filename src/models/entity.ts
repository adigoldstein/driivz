export class Entity {

  constructor(id: number) {
    this.id = id;
  }

  id: number;

  toString(): void {
    const keys = Object.getOwnPropertyNames(this);
    for (const k of keys) {
      console.log(`${k} = ${this[k]}`);
    }
  }
}
