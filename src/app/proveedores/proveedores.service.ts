import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  private proveedores: string[] = [];

  agregarProveedor(proveedor: string): void {
    this.proveedores.push(proveedor);
  }

  darDeBajaProveedor(proveedor: string): void {
    const index = this.proveedores.indexOf(proveedor);
    if (index !== -1) {
      this.proveedores.splice(index, 1);
    }
  }

  obtenerProveedores(): string[] {
    return this.proveedores;
  }
}

