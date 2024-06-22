import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class footerComponent {
  footerForm!: FormGroup;
  @Output()  registroCreado = new EventEmitter <any>();

  constructor(){
    this.footerForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required])
    })
  }
ngOnInit():void{}

onSubmit():void{
  console.log(this.footerForm.value)
}
}
