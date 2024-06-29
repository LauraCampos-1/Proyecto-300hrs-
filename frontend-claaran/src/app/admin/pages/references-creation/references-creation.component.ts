import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CreacionDeReferenciasService } from '../../../services/creacion-de-referencias.service';
import { ReferencesCreation } from '../../../services/references-creation.service';


@Component({
  selector: 'admin-references-creation',
  templateUrl: './references-creation.component.html',
  styleUrl: './references-creation.component.css'
})
export class ReferencesCreationComponent {
  CreacionDeReferencias!: FormGroup;
  @Output()  registroCreado = new EventEmitter<any>();
  constructor  (private referenciaService: CreacionDeReferenciasService, private referenceCreation:ReferencesCreation ){
    this.CreacionDeReferencias = new FormGroup({
    // ref: new FormControl('',[Validators.required]),
    subarancel: new FormControl('',[Validators.required]),
    arancel: new FormControl('',[Validators.required]),
    iva: new FormControl('',[Validators.required]),
    producto: new FormControl('',[Validators.required]),
    marca: new FormControl('',[Validators.required]),
    modelo: new FormControl('',[Validators.required]),
    referencia: new FormControl('',[Validators.required]),
    serial: new FormControl('',[Validators.required]),
    usod: new FormControl('',[Validators.required]),
 })
}

ref = new FormControl()

ngOnInit():void{}



  getDataByQuery() {
    this.ref.valueChanges
    .pipe(
      debounceTime(1500)
    )
    .subscribe(query => {
      this.referenciaService.getProductByRef(query).subscribe((data) => {
        console.log(data)
        const product = data.data
        this.CreacionDeReferencias.setValue({
          arancel: product.PosArancelId,
          subarancel: product.PosArancelArancel,
          iva: product.posArancelIva,
          producto: product.producto,
          marca: product.marca,
          modelo: product.modelo,
          referencia: product.referencia,
          serial: product.serial,
          usod: product.uso
        })
       })
    })
  }

  onSubmit(): void {
    console.log(this.CreacionDeReferencias.value)

      const datos = this.CreacionDeReferencias.value;

      this.referenciaService.postRegister(datos).subscribe( data => {
        console.log(data);
  
  /*       this.registroCreado.emit(data); */
        /* this.CreacionDeReferencias.reset(); */
      }) 

    }


}
