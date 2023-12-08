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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    TenisComponent,
    ProveedoresComponent,
<<<<<<< HEAD
    ClienteComponent,
    EmpleadosComponent,
=======
    MostrarProductosComponent
>>>>>>> b5f205bf5e619c0a97eee4d5876ca5af5ac51c63
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
