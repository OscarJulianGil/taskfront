import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import LoginRequest from '../features/login/LoginRequest';
import LoginResponse from '../features/login/LoginResponse';
import { enviroment } from 'src/environments/enviroment';
import selectAllResponse from '../features/categories/selectAll/selectAllResponse';
import myTaskResponse from '../features/tasks/myTask/myTaskResponse';
import registerTaskRequest from '../features/tasks/register/registerTaskRequest';
import Response from '../features/Response';
import { AuthService } from './auth.service';
import registerUserRequest from '../features/registerUser/registerUserRequest';
import registerUserResponse from '../features/registerUser/registerUserResponse';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient,private auth: AuthService) {
    
  }

  headersConfig(){
    return  new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getSession()?.token}`
    })
  }

  doLogin(data: LoginRequest):Observable<LoginResponse>{
      
      let endPoint = `${enviroment.urlApiServiceDesk}/login/login`;
      return this.http.post<LoginResponse>(endPoint,data);
  }


  registerUser(data: registerUserRequest):Observable<registerUserResponse>{
    let endPoint = `${enviroment.urlApiServiceDesk}/login/register`;
    return this.http.post<registerUserResponse>(endPoint,data);
  }

  selectCategories():Observable<selectAllResponse>{
    let endPoint = `${enviroment.urlApiServiceDesk}/Category`;
    return this.http.get<selectAllResponse>(endPoint,{ headers: this.headersConfig() });
  }

  selectMyTask(userId:string,categoryId:string|null):Observable<myTaskResponse>{
    let endPoint = `${enviroment.urlApiServiceDesk}/task/user/${userId}`;
    if(categoryId != null){
      endPoint =  `${endPoint}/${categoryId}`;
    }
    return this.http.get<myTaskResponse>(endPoint,{ headers: this.headersConfig() });
  }

  registerTask(data: registerTaskRequest):Observable<Response>{
    let endPoint = `${enviroment.urlApiServiceDesk}/task/create`;
    return this.http.post<Response>(endPoint,data,{ headers: this.headersConfig() });
  }

  deleteTaskById(id: string):Observable<Response>{
    let endPoint = `${enviroment.urlApiServiceDesk}/task/delete/${id}`;
    return this.http.delete<Response>(endPoint,{ headers: this.headersConfig() });
  }

  completedTask(id: string):Observable<Response>{
    let endPoint = `${enviroment.urlApiServiceDesk}/task/update/status/${id}`;
    return this.http.patch<Response>(endPoint,null,{ headers: this.headersConfig() });
  }

}
