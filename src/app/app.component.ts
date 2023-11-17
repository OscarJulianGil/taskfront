import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'service_desk';
  isSessionActive: boolean=false;

  constructor(private router: Router,public authService:AuthService){

  }


  ngOnInit(): void {
    this.validateUserLogin();
  }

  validateUserLogin(){
    if(this.authService.getSession() != null){
      this.isSessionActive=true;
      this.router.navigate(['/init']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  closeSession(){
    this.authService.closeSession();
    this.router.navigate(['/login']);
  }

}
