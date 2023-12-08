import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerProductosService {

  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/productos`);
  }

  getvista1(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/vista_empleado_usuario`);
  }

  getvista2(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/vista_productos`);
  }

  getvista3(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/vista_cliente_direccion`);
  }

  clientessonempleados(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/clientes_son_empleados`);
  }

  totalcategoria(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/total_por_categoria`);
  }

  

  
  totalPrecioProducto(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/total_precio_productos`);
  }
  

}
