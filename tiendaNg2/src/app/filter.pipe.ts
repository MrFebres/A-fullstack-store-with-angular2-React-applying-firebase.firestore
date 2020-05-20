import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const resultProd = [];
    for (const prod of value) {
      if (prod.data.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultProd.push(prod);
      };
    };
    return resultProd;
  }

}
