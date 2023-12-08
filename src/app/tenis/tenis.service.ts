import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TenisService {
  private tenis: string[] = [];

  agregarTenis(nombre: string): void {
    this.tenis.push(nombre);
  }

  obtenerTenis(): string[] {
    return this.tenis.slice(); // Devuelve una copia para evitar cambios directos desde fuera del servicio
  }

  darDeBajaTenis(nombre: string): void {
    const index = this.tenis.indexOf(nombre);
    if (index !== -1) {
      this.tenis.splice(index, 1);
    }
  }
}
