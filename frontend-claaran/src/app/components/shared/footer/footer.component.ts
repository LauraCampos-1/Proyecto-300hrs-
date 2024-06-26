import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FooterService } from '../../../../services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class footerComponent {
  footerForm!: FormGroup;
  @Output()  registroCreado = new EventEmitter <any>();

  constructor(private footerService: FooterService){
    this.footerForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required])
    })
  }
ngOnInit():void{}

onSubmit(event: Event):void{
  event.preventDefault()
 if (this.footerForm.valid){
  this.footerService.sendDataClient(this.footerForm.value).subscribe((data)=> {
    console.log(data)
  })
 }
}
}
