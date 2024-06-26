import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient){}

  postRegister( newRegister:any){
      return this.http.post<any>('http://localhost:3001/api/auth/register', newRegister)
  }
}