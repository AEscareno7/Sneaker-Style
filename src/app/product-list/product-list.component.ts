// product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ObtenerProductosService } from '../services/obtener-productos.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private obtenerProductosService: ObtenerProductosService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.obtenerProductosService.getProductos().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(productId: number) {
    this.obtenerProductosService.deleteProduct(productId).subscribe(() => {
      this.loadProducts();
    });
  }

  updateProduct(product: any) {
    this.obtenerProductosService.updateProduct(product).subscribe(() => {
      this.loadProducts();
    });
  }
}
