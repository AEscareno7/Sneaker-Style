import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { TenisComponent } from './tenis/tenis.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'productos', component: TenisComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
