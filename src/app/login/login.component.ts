import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  isSpacePresent = false;

  constructor(private router: Router) {}

  emailChanged(): void {
    this.isSpacePresent = this.user.email.trim().includes(' ');
  }

  passwordChanged(): void {
    this.isSpacePresent = this.user.password.trim().includes(' ');
  }

  login(form: any): void {
    const emailWithoutSpaces = this.user.email.trim();
    const passwordWithoutSpaces = this.user.password.trim();

    if (emailWithoutSpaces.includes(' ') || passwordWithoutSpaces.includes(' ')) {
      alert('Por favor, evita espacios en blanco en el email o contraseña.');
      return;
    }

    // Simulación de lógica de inicio de sesión
    if (emailWithoutSpaces === 'usuario@example.com' && passwordWithoutSpaces === 'contraseña') {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/home']); // Redirige a la ruta '/home'
    } else {
      console.log('Credenciales inválidas. Por favor, intenta de nuevo.');
      // Puedes mostrar un mensaje de error al usuario o realizar otra acción
    }

    // Aquí puedes realizar más acciones posteriores al inicio de sesión
  }
}
