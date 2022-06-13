import { Model } from "@core/interfaces/model.interface";

export class User implements Model {
  private _id!: number;
  private _username!: string;
  private _password!: string;
  private _publicKey!: string;
  private _hash!: string;
  private _ts!: string;

  public get id(): number {
      return this._id;
  }
  public set id(value: number) {
      this._id = value;
  }
  public get username(): string {
      return this._username;
  }
  public set username(value: string) {
      this._username = value;
  }
  public get password(): string {
      return this._password;
  }
  public set password(value: string) {
      this._password = value;
  }
  public get publicKey(): string {
      return this._publicKey;
  }
  public set publicKey(value: string) {
      this._publicKey = value;
  }
  public get hash(): string {
      return this._hash;
  }
  public set hash(value: string) {
      this._hash = value;
  }
  public get ts(): string {
      return this._ts;
  }
  public set ts(value: string) {
      this._ts = value;
  }

  constructor(input: any) {
      Object.assign(this, input);
  }

  serialize() {
      return {
          id: this.id,
          username: this.username,
          password: this.password,
          publicKey: this.publicKey,
          hash: this.hash,
          ts: this.ts,
      };
  }
}
