import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent {
  empleadosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empleadosForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      nombre2: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      apellido1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      apellido2: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      idDireccion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      curp: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.minLength(18), Validators.maxLength(18)]],
      cargo: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      idUsuario: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit() {
    if (this.empleadosForm.valid) {
      Swal.fire('Empleado agregado con éxito', '', 'success');
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }
}
