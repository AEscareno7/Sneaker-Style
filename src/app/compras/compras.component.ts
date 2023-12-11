import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
})
export class ComprasComponent {
  comprasForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.comprasForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      total: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      fecha: [
        '',
        [Validators.required, Validators.pattern(/^(\d{4})-(\d{2})-(\d{2})$/)],
      ],
      idProveedor: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      idEmpleado: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit() {
    if (this.comprasForm.valid) {
      Swal.fire('Compra registrada con éxito', '', 'success');
    } else {
      Swal.fire(
        'Error',
        'Por favor, completa correctamente todos los campos.',
        'error'
      );
    }
  }
}
