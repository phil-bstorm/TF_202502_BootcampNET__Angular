import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: false
})
export class TimePipe implements PipeTransform {

  // value = seconds
  transform(value: number): string {
    if(value < 0) {
      return value.toString();
    }

    // conversion depuis les secondes
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const secondes = value % 60;

    //1:5:22 => 01:05:22 avec padStart
    const hh = hours.toString().padStart(2, '0');
    const mm = minutes.toString().padStart(2, '0');
    const ss = secondes.toString().padStart(2, '0');

    // format
    return `${hh}:${mm}:${ss}`; // En C# c'est $"{maVariable}"
  }
}
