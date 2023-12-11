import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ObtenerProductosService } from '../services/obtener-productos.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
})
export class ComprasComponent {
  comprasForm: FormGroup;

  constructor(private fb: FormBuilder, private obtenerProductosService: ObtenerProductosService) {
    this.comprasForm = this.fb.group({
      total: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      fecha: [
        '',
        [Validators.required, Validators.pattern(/^(\d{4})-(\d{2})-(\d{2})$/)],
      ],
      id_proveedor: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      id_empleado: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit() {
    if (this.comprasForm.valid) {
      this.obtenerProductosService.agregarCompra(this.comprasForm.value).subscribe(
        (response) => {
          Swal.fire('Compra agregado con éxito', '', 'success');
        },
        (error) => {
          if (error.error && error.error.message) {
            console.error('Error al agregar el Compra:', error.error.message);
            Swal.fire('Error', error.error.message, 'error');
          } 
          Swal.fire('Compra agregado con éxito', '', 'success');

        }
      );
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }
}
