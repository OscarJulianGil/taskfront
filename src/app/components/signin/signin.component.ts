
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import LoginRequest from 'src/app/features/login/LoginRequest';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  @Output() itemRegistered = new EventEmitter<boolean>();

  loginModel = {} as LoginRequest;
  isWaiting : boolean = false;
  
  constructor(private apiService: ApiserviceService,private auth: AuthService,private router: Router){

  }
  ngOnInit(): void {
   
  }

  login(){
    this.callServer();
  }

  callServer(){
    this.isWaiting = true;
    this.apiService.doLogin(this.loginModel).subscribe({
      next:(data)=>{
         console.log(data);
         if(data.token != null && data.token != ""){
            this.auth.saveSession(data.token,data.id);
            this.router.navigate(['/init']);
         }
         else{
          alert(data.message);
         }
      },
      error:(e) => {
        this.isWaiting = false;
      },
      complete:()=>{
        this.isWaiting = false;
      }
    })
  }

  swithRegister(value: boolean) {
    this.itemRegistered.emit(value);
  }
}
