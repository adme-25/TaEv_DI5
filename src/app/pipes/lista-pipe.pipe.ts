import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listaPipe',
  standalone: false
})
export class ListaPipe implements PipeTransform {
  transform(lista: string[], chunkSize: number): any[] {
    return lista ? Array.from({ length: Math.ceil(lista.length / chunkSize) }, (_, i) =>
      lista.slice(i * chunkSize, (i + 1) * chunkSize)
    ) : [];
  }
}
