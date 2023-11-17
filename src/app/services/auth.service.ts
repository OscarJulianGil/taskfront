import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../features/session/session';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }


  saveSession(token:string,id:string){
    sessionStorage.setItem('token',token);
    sessionStorage.setItem('id',id);
  }

  getSession():Session|null{
    if(sessionStorage.getItem('id') == null){
      return null;
    }
    if(sessionStorage.getItem('token') == null){
      return null;
    }
    var session = { 
                    id: sessionStorage.getItem('id'),
                    token: sessionStorage.getItem('token')
                  } as   Session
    return session;
  }

  closeSession(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
  }
}
