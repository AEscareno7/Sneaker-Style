// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private productsUpdated = new Subject<void>();

  productsUpdated$ = this.productsUpdated.asObservable();

  notifyProductsUpdated() {
    this.productsUpdated.next();
  }
}
