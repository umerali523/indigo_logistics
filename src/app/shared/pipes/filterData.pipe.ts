import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'FilterData' , pure:false})
export class FilterDataPipe implements PipeTransform {
   
    
    transform(){
    //     if (!practiceListing) return [];
    //     if (!searchStr||searchStr==''||searchStr==null) return practiceListing;
    // //    return practiceListing.filter(item=>{
    // //         item.name.toLowerCase().indexOf(searchStr.toLowerCase())>-1
    // //     });
    //         return practiceListing.filter(e => (e.name.toLowerCase().indexOf(searchStr.toLowerCase()) > -1) ||
    //         (e.contact_phone.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 )||
    //         (e.contact_email.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 )||
    //         (e.city.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 ));
}
}