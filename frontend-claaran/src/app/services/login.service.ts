import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  postLogin(newLogin: any){
    return this.http.post<any>('http://localhost:3001/api/auth/login',newLogin)
      .pipe(
        tap( response => {
          console.log( ':::', response, ':::' );

          if( response.ok ) {
            this.router.navigateByUrl( '/admin/creacion-referencias' )
          }
          
        })
      )
  }
}
