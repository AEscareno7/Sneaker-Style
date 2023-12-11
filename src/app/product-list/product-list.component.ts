// product-list.component.ts

import { Component, OnInit , OnDestroy} from '@angular/core';
import { ObtenerProductosService } from '../services/obtener-productos.service';
import { Subscription } from 'rxjs';
import { NotificationService } from '../services/notification-service.service';
import { TenisComponent } from '../tenis/tenis.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: any[] = [];
  private subscription: Subscription  = new Subscription();;

  constructor(private obtenerProductosService: ObtenerProductosService, private notificationService: NotificationService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProducts();
    this.subscription = this.notificationService.productsUpdated$.subscribe(() => {
      this.loadProducts();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadProducts() {
    this.obtenerProductosService.getProductos().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(productId: number) {
    this.obtenerProductosService.deleteProduct(productId).subscribe(
      (response) => {
        console.log('Producto eliminado correctamente', response);
      this.loadProducts();
    },(error)=>{
      this.loadProducts();
      console.error('Error al eliminar producto', error);
    });
  }


  updateProduct(product: any) {
    this.obtenerProductosService.updateProduct(product).subscribe(() => {
      this.loadProducts();
    });
  }
}
