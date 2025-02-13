import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custome'
})
export class CustomePipe implements PipeTransform {
nvalue="";
  transform(value: string): string {
   
    return "welcome "+ value;
  }

}
