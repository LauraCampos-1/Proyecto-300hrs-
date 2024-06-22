import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router
  ) {
      this.loginForm = new FormGroup({
        usuario: new FormControl( '', [ Validators.required ] ),
        contrasena: new FormControl( '', [ Validators.required ] )
      })
  }

  onSubmit() {
    if( this.loginForm.valid ) {
      console.log( this.loginForm.value )
      this.loginForm.reset()
    }

    
  }

  navigateToReferences(event: Event) {
    event.preventDefault()
    this.router.navigate(['/administration/creacionref'])
  }
}
