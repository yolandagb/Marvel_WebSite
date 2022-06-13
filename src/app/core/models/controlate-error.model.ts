import { OutputTypes } from '@core/enums/output-types.enum';
import { Model } from '@core/interfaces/model.interface';

export class ControlatedError extends Error implements Model {
  id!: number;
  title!: string;
  output!: OutputTypes;

  constructor(
    message: string = '',
    title: string = 'Error inesperado',
    output: OutputTypes = OutputTypes.MODAL
  ) {
    super(message);
    this.title = title;
    this.output = output;
  }
  serialize() {
    return {}; // TODO
  }
}
