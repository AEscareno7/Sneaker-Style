import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from './notification-service.service';

@Injectable({
  providedIn: 'root'
})
export class ObtenerProductosService {

  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient, private notificationService: NotificationService) {}

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
  
  deleteProduct(productId: number): Observable<any> {
    this.notificationService.notifyProductsUpdated();
    const deleteUrl = `http://localhost:3000/productos/${productId}`;
    return this.http.delete(deleteUrl);
  }

  updateProduct(product: any): Observable<any> {
    const updateUrl = `${this.apiUrl}/${product.id}`;
    return this.http.put(updateUrl, product);
  }

  updateEmpleados(empleados:any): Observable<any> {
    const updateUrl = `${this.apiUrl}/${empleados.id}`;
    return this.http.put(updateUrl, empleados);
  }

  
  totalPrecioProducto(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/total_precio_productos`);
  }
  
  agregarEmpleado(empleado: any): Observable<any> {
    return this.http.post(`http://localhost:3000/empleados`, empleado);
  }

  agregarProveedor(proveedor: any): Observable<any> {
    return this.http.post(`http://localhost:3000/proveedores`, proveedor);
  }
  agregarCliente(cliente: any): Observable<any> {
    return this.http.post(`http://localhost:3000/clientes`, cliente);
  }

}
