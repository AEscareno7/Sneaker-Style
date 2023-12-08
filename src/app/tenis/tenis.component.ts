import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TenisService } from './tenis.service';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.css'],
})
export class TenisComponent {
  tenisForm: FormGroup;

  constructor(private fb: FormBuilder, private tenisService: TenisService) {
    this.tenisForm = this.fb.group({
      descripcion: ['', [Validators.maxLength(30)]],
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
      precio: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      id_proveedor: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      id_categoria: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit() {
    if (this.tenisForm.valid) {
      this.tenisService.agregarTenis(this.tenisForm.value).subscribe(
        (response) => {
          Swal.fire('Producto agregado con éxito', '', 'success');
        },
        (error) => {
          if (error.error && error.error.message) {
            console.error('Error al agregar el producto:', error.error.message);
            Swal.fire('Error', error.error.message, 'error');
          } else {
            console.error('Error al agregar el producto:', error);
            Swal.fire('Error', 'Ha ocurrido un error al agregar el producto.', 'error');
          }
        }
      );
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }
}
