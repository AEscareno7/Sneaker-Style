import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ObtenerProductosService } from '../services/obtener-productos.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent {
  empleadosForm: FormGroup;

  constructor(private fb: FormBuilder, private obtenerProductosService: ObtenerProductosService) {
    this.empleadosForm = this.fb.group({
      nombre1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      nombre2: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      apellido1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      apellido2: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      id_direccion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      curp: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      cargo: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      id_usuario: ['', [ Validators.pattern(/^\d+$/)]],
    });
  }




  onSubmit() {
    if (this.empleadosForm.valid) {
      this.obtenerProductosService.agregarEmpleado(this.empleadosForm.value).subscribe(
        (response) => {
          Swal.fire('Empleado agregado con éxito', '', 'success');
        },
        (error) => {
          if (error.error && error.error.message) {
            console.error('Error al agregar el Empleado:', error.error.message);
            Swal.fire('Error', error.error.message, 'error');
          } else {
            console.error('Error al agregar el Empleado:', error);
            Swal.fire('Error', 'Ha ocurrido un error al agregar el Empleado.', 'error');
          }
        }
      );
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }
}
