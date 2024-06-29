import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class ReferencesCreation {

    constructor(private http:HttpClient){}
  
/*     postRegister( newReference:any){
        return this.http.post<any>('http://localhost:3001/api/products', newReference)
    } */
  }