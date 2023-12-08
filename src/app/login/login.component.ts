import { Component } from '@angular/core';

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

  login(form: any) {
    // Eliminar espacios en blanco alrededor del texto ingresado
    const emailTrimmed = this.user.email.trim();
    const passwordTrimmed = this.user.password.trim();

    if (form.valid && emailTrimmed !== '' && passwordTrimmed !== '') {
      // Simulación de lógica de inicio de sesión (reemplaza esto con tu lógica real)
      if (emailTrimmed === 'usuario@example.com' && passwordTrimmed === 'contraseña') {
        console.log('Login successful!');
        // Aquí puedes redirigir a otra página o realizar acciones posteriores al inicio de sesión
      } else {
        console.log('Invalid credentials. Please try again.');
        // Puedes mostrar un mensaje de error al usuario o realizar alguna acción en caso de credenciales inválidas
      }
    } else {
      console.log('Form is invalid');
      // Puedes mostrar un mensaje de error, deshabilitar el botón de inicio de sesión, etc.
    }
  }
}
