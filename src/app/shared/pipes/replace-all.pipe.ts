import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceAll',
})
export class ReplaceAllPipe implements PipeTransform {
  transform(term: string, findTerm: string, replaceTerm: string): string {
    const uppercaseFirstCharFindTerm =
      findTerm.charAt(0).toUpperCase() + findTerm.slice(1);
    const uppercaseFirstCharReplaceTerm = replaceTerm.replace(
      new RegExp(findTerm, 'i'),
      uppercaseFirstCharFindTerm
    );
    return term
      .replace(new RegExp(` ${findTerm} `, 'i'), ` ${replaceTerm} `)
      .replace(
        new RegExp(uppercaseFirstCharFindTerm, 'i'),
        uppercaseFirstCharReplaceTerm
      );
  }
}
