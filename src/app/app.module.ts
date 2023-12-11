import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule desde Angular

import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TenisComponent } from './tenis/tenis.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadosComponent } from './empleados/empleados.component';

import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { ComprasComponent } from './compras/compras.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    TenisComponent,
    ProveedoresComponent,
    ClienteComponent,
    EmpleadosComponent,
    MostrarProductosComponent,
      ProductListComponent,
      ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
