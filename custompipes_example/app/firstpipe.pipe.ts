import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstpipe',
  standalone: true
})
export class FirstpipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value.split('').reverse().join('');
  }

}
