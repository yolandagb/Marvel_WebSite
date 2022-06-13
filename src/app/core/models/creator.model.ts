import { Model } from "@core/interfaces/model.interface";

export class Creator implements Model {
  id!: number;
  private _name!: string;
  private _role!: string;

  get name(): string {
      return this._name;
  }
  set name(value: string) {
      this._name = value;
  }

  get role(): string {
      return this._role;
  }

  set role(value: string) {
      this._role = value;
  }

  constructor(input: any) {
      Object.assign(this, input);
  }
  serialize() {
      return {
          name: this.name,
          role: this.role,
      }
  }
}
