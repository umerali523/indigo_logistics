import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFormatter'})
export class dateFormatterPipe implements PipeTransform {

    transform(value : Date){

    }

}