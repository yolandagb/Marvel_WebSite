import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '@core/models/creator.model';

@Pipe({
  name: 'creators'
})
export class CreatorsPipe implements PipeTransform {

  transform(value: Creator[]): string {
    return value.map(c => `${c.name} (${c.role})`).join(', ')
  }

}
