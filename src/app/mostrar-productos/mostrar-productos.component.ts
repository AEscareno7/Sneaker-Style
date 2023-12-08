import { Component, OnInit } from '@angular/core';
import { ObtenerProductosService } from '../services/obtener-productos.service';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent implements OnInit {
  
  productos: any[] = [];
  vista1: any[] = [];
  vista2: any[] = [];
  vista3: any[] = [];
  clienteempleados: any[] =[];
  totalcategoria: any[] =[];
  totalPrecioProductos: any[] =[];

  constructor(private productoService: ObtenerProductosService) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerVista1();
    this.obtenerVista2();
    this.obtenerVista3();
    this.obtenerClienteEmpleado();
    this.totalCategoria();
    this.totalProductos();

  }

  totalProductos(): void {
    this.productoService.totalPrecioProducto().subscribe(
      (data) => {
        this.totalPrecioProductos = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }



  totalCategoria(): void {
    this.productoService.totalcategoria().subscribe(
      (data) => {
        this.totalcategoria = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  obtenerClienteEmpleado(): void {
    this.productoService.clientessonempleados().subscribe(
      (data) => {
        this.clienteempleados = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  obtenerVista1(): void {
    this.productoService.getvista1().subscribe(
      (data) => {
        this.vista1 = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  obtenerVista2(): void {
    this.productoService.getvista2().subscribe(
      (data) => {
        this.vista2 = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  obtenerVista3(): void {
    this.productoService.getvista3().subscribe(
      (data) => {
        this.vista3 = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }


}
