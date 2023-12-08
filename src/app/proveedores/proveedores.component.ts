import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  proveedoresForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.proveedoresForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      idMedioComunicacion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      empresa: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
    });
  }

  onSubmit() {
    if (this.proveedoresForm.valid) {
      Swal.fire('Proveedor agregado con éxito', '', 'success');
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }
}
