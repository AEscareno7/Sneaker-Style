import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ObtenerProductosService } from '../services/obtener-productos.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private obtenerProductosService: ObtenerProductosService) {
    this.clienteForm = this.fb.group({
      nombre1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      nombre2: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      apellido1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      apellido2: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      id_direccion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      this.obtenerProductosService.agregarCliente(this.clienteForm.value).subscribe(
        (response) => {
          Swal.fire('Cliente agregado con éxito', '', 'success');
        },
        (error) => {
          if (error.error && error.error.message) {
            console.error('Error al agregar el Cliente:', error.error.message);
            Swal.fire('Error', error.error.message, 'error');
          } 
          Swal.fire('Cliente agregado con éxito', '', 'success');
        }
      );
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }
}
