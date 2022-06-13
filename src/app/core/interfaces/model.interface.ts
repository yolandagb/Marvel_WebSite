export interface Model {
  id: number | undefined;
  serialize: () => { [key: string]: any };
}
