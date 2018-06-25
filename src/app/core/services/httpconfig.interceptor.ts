import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as SecureLS from 'secure-ls';
import { api_params } from "../../../environments/environment";
import { tap, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class HttpConfig implements HttpInterceptor {
  constructor(){}
    localStore = new SecureLS();
    token : string;
    
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.token = this.localStore.get('access_token');
   
    // console.log('TOKKEN:',this.token);
    // if(req.method=="POST"  && (this.token=='' || !this.token)){
    //   console.log('Empty Token POST REQUEST:',req);
    //   return next.handle(req);
    // }

    if(req.method=="POST"){
      var newReq = req.clone({
        url : api_params.BASE_URL  + req.url,
      });
      return next.handle(newReq);

    }else if(req.method=="GET")
    {
      console.log('GetOldUrl:',req);
      var newReq = req.clone({
        url : api_params.BASE_URL  + req.url,
        setParams : {
          token : this.token,
          // tz : this.tzOffset
        }

      });
       console.log('NewReq:',newReq);
       return next.handle(newReq);
    }
   }


  private errorHandler(error:Response){

    console.log('Inside Error Handler');
    if (error instanceof HttpErrorResponse) {

      console.error('There was an HTTP error.', error.message, 'Status code:', (<HttpErrorResponse>error).status);
      return Observable.throw('Unexpected Error Ocured'); 

    } else if (error instanceof TypeError) {

      console.error('There was a Type error.', error.message);
      return Observable.throw('Unexpected Error Ocured'); 
    } else if (error instanceof Error) {
      console.error('There was a general error.', error.message);
      return Observable.throw('Unexpected Error Ocured'); 
    } else {
      console.error('Nobody threw an error but something happened!', error);
      return Observable.throw('Unexpected Error Ocured'); 
    }
    

  }
}