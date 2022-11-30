import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractEntityId',
})
export class ExtractEntityIdPipe implements PipeTransform {
  transform(url: string): string {
    const parts = url.split('/');
    return parts.filter(Boolean).at(-1) ?? '';
  }
}
