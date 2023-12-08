import { Component } from '@angular/core';
import { TenisService } from './tenis.service'; 

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.css'],
})
export class TenisComponent {
  nuevoTenis: string = '';
  tenis: string[] = [];

  constructor(private tenisService: TenisService) {
    this.tenis = this.tenisService.obtenerTenis();
  }

  agregarTenis(): void {
    this.tenisService.agregarTenis(this.nuevoTenis);
    this.nuevoTenis = '';
  }

  darDeBajaTenis(tenis: string): void {
    this.tenisService.darDeBajaTenis(tenis);
  }
}