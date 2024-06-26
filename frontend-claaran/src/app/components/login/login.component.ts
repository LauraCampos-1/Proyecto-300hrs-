import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
      this.loginForm = new FormGroup({
        username: new FormControl( '', [ Validators.required ] ),
        password: new FormControl( '', [ Validators.required ] )
      })
  }

  onSubmit() {
    if( this.loginForm.valid ) {
      console.log( this.loginForm.value )
      this.loginService.postLogin(this.loginForm.value).subscribe( (data)=>{
        console.log(data)
        if(!data.ok) {
          console.log('error al iniciar sesion')
        } else {
          this.router.navigateByUrl( '/admin' )
        }

      })
    }


  }

  // navigateToReferences(event: Event) {
  //   event.preventDefault()
  //   this.router.navigate(['/administration/creacionref'])
  // }
}
