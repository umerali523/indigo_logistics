import { AbstractControl, ValidatorFn, ControlContainer } from '@angular/forms';

// export function ComparePassowrd(passwordVal):ValidatorFn {
//     return(confirm_password : AbstractControl)=>{
//         console.log('PasswordVal:',passwordVal , 'confirm_pass:',confirm_password.value);
//         if(confirm_password.value!= passwordVal){
//             return {
//                 compare_password : true
//             };
//         }
//         return null;
//     };
// }

export function ComparePassowrd(group : ControlContainer) {
    if(group.value.password!==group.value.password_confirmation){
        return{
            compare_password : true
        }

    }
    return null;
   
}