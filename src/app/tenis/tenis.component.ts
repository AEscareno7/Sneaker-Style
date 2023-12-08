import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.css'],
})
export class TenisComponent {
  tenisForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tenisForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
      descripcion: ['', [Validators.maxLength(30)]],
      precio: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      idProveedor: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      idCategoria: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit() {
    if (this.tenisForm.valid) {
      Swal.fire('Producto agregado con éxito', '', 'success');
    } else {
      Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
    }
  }
}
