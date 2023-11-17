import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import registerUserRequest from 'src/app/features/registerUser/registerUserRequest';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent {

  @Output() itemRegistered = new EventEmitter<boolean>();
  
  registerModel = {} as registerUserRequest;
  isWaiting : boolean = false;
  reactiveForm:FormGroup;

  constructor(private apiService:ApiserviceService,private auth: AuthService,private router: Router){
      this.reactiveForm = new FormGroup({
          name: new FormControl(this.registerModel.name, [Validators.required]),
          email: new FormControl(this.registerModel.email, [Validators.required]),
          password: new FormControl(this.registerModel.password, [Validators.required,Validators.minLength(5)])
      })
  }


  register(){
    if(!this.reactiveForm.valid){
      alert("Please, type all the information.");
      return;
    }
    this.isWaiting = true;
    this.apiService.registerUser(this.registerModel).subscribe({
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
