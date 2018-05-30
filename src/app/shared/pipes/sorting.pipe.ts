import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Sorting'})
export class SortingPipe implements PipeTransform {
   
    transform(){

        // Check if is not null
        // if (!practiceListing || !path || !order) return practiceListing;
    
        // return practiceListing.sort((a: Practice, b: Practice) => {
        //   // We go for each property followed by path
        //   path.forEach(property => {
        //     a = a[property];
        //     b = b[property];
        //   })
    
        //   // Order * (-1): We change our order
        //   return a > b ? order : order * (- 1);
        // })
      }

}