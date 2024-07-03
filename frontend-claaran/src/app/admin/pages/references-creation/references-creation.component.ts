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
  autorizaRegistro: boolean = false;
  autorizaActualizar: boolean = false;
  
  constructor  (private referenciaService: CreacionDeReferenciasService, private referenceCreation:ReferencesCreation ){
    this.CreacionDeReferencias = new FormGroup({
    // ref: new FormControl('',[Validators.required]),
    PosArancelId: new FormControl('',[Validators.required]),
    PosArancelArancel: new FormControl(0,[Validators.required]),
    posArancelIva: new FormControl(0,[Validators.required]),
    producto: new FormControl('',[Validators.required]),
    marca: new FormControl('',[Validators.required]),
    modelo: new FormControl('',[Validators.required]),
    referencia: new FormControl('',[Validators.required]),
    serial: new FormControl('',[Validators.required]),
    uso: new FormControl('',[Validators.required]),
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


        if( data.ok ) {
          this.autorizaRegistro = false;

          const product = data.data
          this.CreacionDeReferencias.setValue({
            PosArancelId: product?.PosArancelId,
            PosArancelArancel: product?.PosArancelArancel,
            posArancelIva: product?.posArancelIva,
            producto: product?.producto,
            marca: product?.marca,
            modelo: product?.modelo,
            referencia: product?.referencia,
            serial: product?.serial,
            uso: product?.uso
          })

          this.autorizaActualizar = true;
        }
        else {
          this.autorizaRegistro = true;

          this.CreacionDeReferencias.reset();
          this.autorizaActualizar = true;
        }

        
       })
    })
  }

  onSubmit(): void {

    if( this.autorizaRegistro ) {
      /** REGISTRA UN PRODUCTO */
      if( this.autorizaRegistro ) {
  
        this.referenciaService.postRegister( this.CreacionDeReferencias.value ).subscribe( data => {
          console.log(data);
  
          this.CreacionDeReferencias.reset();
          this.autorizaRegistro = false;
    /*       this.registroCreado.emit(data); */
          /* this.CreacionDeReferencias.reset(); */
        }) 
      }
      else {
        console.log( 'No registramos nada' );
      }
    }

    if( this.autorizaActualizar ) {
      const ref = this.CreacionDeReferencias.value.referencia;


      /** ACTUALIZA UN PRODUCTO */
      this.referenciaService.updateProductByRef( ref, this.CreacionDeReferencias.value ).subscribe( data => {
        console.log( data )
      })

    }


    


    

    }


}
