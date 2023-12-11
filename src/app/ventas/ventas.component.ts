import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ObtenerProductosService } from '../services/obtener-productos.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  ventasForm: FormGroup;

  constructor(private fb: FormBuilder, private obtenerProductosService: ObtenerProductosService) {
    this.ventasForm = this.fb.group({
      total: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      fecha: [
        '',
        [Validators.required, Validators.pattern(/^(\d{4})-(\d{2})-(\d{2})$/)],
      ],
      id_cliente: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      id_empleado: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit() {
    if (this.ventasForm.valid) {
      this.obtenerProductosService.agregarVenta(this.ventasForm.value).subscribe(
        (response) => {
          Swal.fire('Venta agregado con éxito', '', 'success');
        },
        (error) => {
          if (error.error && error.error.message) {
            console.error('Error al agregar el Venta:', error.error.message);
            Swal.fire('Error', error.error.message, 'error');
          } 
          Swal.fire('Venta agregado con éxito', '', 'success');

        }
      );
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }

}
