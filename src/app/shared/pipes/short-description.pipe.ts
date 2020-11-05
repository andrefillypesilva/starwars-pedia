import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(fullDescription: string, size: number = 144): string {
    return fullDescription.substr(0, size) + (fullDescription.length > size ? '...' : '');
  }

}
