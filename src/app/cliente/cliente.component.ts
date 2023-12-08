import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      nombre2: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      apellido1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      apellido2: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      idDireccion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      Swal.fire('Cliente agregado con éxito', '', 'success');
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }
}
