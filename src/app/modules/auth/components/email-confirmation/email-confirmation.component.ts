import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../core/services/auth-service.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit , OnDestroy {

  constructor(private router:Router,private route: ActivatedRoute , private authService : AuthService , private modalService: BsModalService) {
    this.subscription = this.route.params.subscribe( params => this.token = params.token );
   }


   @ViewChild('template')
   public template: TemplateRef<any>;
   modalRef: BsModalRef;
   modalConfig = {
     keyboard : false, 
     ignoreBackdropClick: true
   }
   
  token:string;
  verifyEmailSpin : boolean;
  verifyEmailError:string;
  generalRes;
  subscription;

  ngOnInit() {
    var access_token = {'token':this.token};
    this.verifyEmailSpin = true;

    this.authService.verifyEmailAddress(access_token).subscribe(res=>{
      console.log('VerifyEmail Response');
      this.verifyEmailSpin = false;
      this.generalRes = res;
      if(this.generalRes.code==0){
        this.openModal(this.template);

      }

    },err=>{
      this.verifyEmailSpin = false;
      var error = err['error'];
      console.log(error.message);
      this.verifyEmailError = error.message;
    });

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  openModal(temp) {
    console.log('Inside open Modal',temp);
    // , { class: 'gray modal-lg' }
    this.modalRef = this.modalService.show(
      temp ,
      Object.assign(this.modalConfig)
    );
  }
  closeModal(){
  
   this.modalRef.hide();
   this.router.navigate(['login']);
   
  }
  loginRedirect(){
   this.router.navigate(['login']);
  }

}
