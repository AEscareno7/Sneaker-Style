import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TenisService {
  private tenis: string[] = [];

  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  agregarTenis(tenisData: any): Observable<any> {
    return this.http.post(this.apiUrl, tenisData);
  }

  //da de baja a clientes
  darDeBajaTenis(nombre: string): void {
    const index = this.tenis.indexOf(nombre);
    if (index !== -1) {
      this.tenis.splice(index, 1);
    }
  }
}
