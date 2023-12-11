import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProveedoresComponent } from '../proveedores/proveedores.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { TenisComponent } from '../tenis/tenis.component';
import { EmpleadosComponent } from '../empleados/empleados.component';
import { RegistroComponent } from './registro.component';
import { VentasComponent } from '../ventas/ventas.component';


const routes: Routes = [
  { path: 'registros', component: RegistroComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'productos', component: TenisComponent },
  { path: 'cliente' , component: ClienteComponent},
  {path: 'empleados' , component: EmpleadosComponent},
  {path: 'ventas' , component: VentasComponent},
  { path: '', redirectTo: '/registros', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}