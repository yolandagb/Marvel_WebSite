export interface Model {
  id: number;
  serialize: () => { [key: string]: any };
}
