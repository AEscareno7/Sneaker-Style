import { Component } from '@angular/core';
import { ProveedoresService } from './proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  nuevoProveedor: string = '';
  proveedores: string[] = [];

  constructor(private proveedoresService: ProveedoresService) {
    this.proveedores = this.proveedoresService.obtenerProveedores();
  }

  agregarProveedor(): void {
    this.proveedoresService.agregarProveedor(this.nuevoProveedor);
    this.nuevoProveedor = '';
  }

  darDeBajaProveedor(proveedor: string): void {
    this.proveedoresService.darDeBajaProveedor(proveedor);
  }
}