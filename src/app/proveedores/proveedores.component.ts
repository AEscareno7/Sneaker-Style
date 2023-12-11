import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ObtenerProductosService } from '../services/obtener-productos.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  proveedoresForm: FormGroup;

  constructor(private fb: FormBuilder, private obtenerProductosService: ObtenerProductosService) {
    this.proveedoresForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      empresa: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
    });
  }

  onSubmit() {
    if (this.proveedoresForm.valid) {
      this.obtenerProductosService.agregarProveedor(this.proveedoresForm.value).subscribe(
        (response) => {
          Swal.fire('Proveedor agregado con éxito', '', 'success');
        },
        (error) => {
          if (error.error && error.error.message) {
            console.error('Error al agregar el Proveedor:', error.error.message);
            Swal.fire('Error', error.error.message, 'error');
          } 
          Swal.fire('Proveedor agregado con éxito', '', 'success');

        }
      );
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }
}
