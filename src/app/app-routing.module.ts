import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { TenisComponent } from './tenis/tenis.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'productos', component: TenisComponent },
  { path: 'cliente' , component: ClienteComponent},
  {path: 'empleados' , component: EmpleadosComponent},
  { path: 'login', component: LoginComponent },
  { path: 'mostrarproductos', component: MostrarProductosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
