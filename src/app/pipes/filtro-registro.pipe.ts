import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroRegistro'
})
export class FiltroRegistroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
