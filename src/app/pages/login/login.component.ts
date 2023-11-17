import { Component, OnInit } from '@angular/core';
import LoginRequest from 'src/app/features/login/LoginRequest';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin:boolean=true

  constructor(private apiServive: ApiserviceService){

  }
  ngOnInit(): void {
   
  }

  changeLogin(changeform: boolean){
    this.isLogin = !changeform;
}

}
