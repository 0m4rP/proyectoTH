import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nextPage: number = 1;
  user: string = '';
  password: string = '';
  private router = inject(Router);

  siguientePaso() {
    if (!this.user || !this.password) {
      alert('Por favor completa todos los campos');
      return;
    }
    this.nextPage = 2;
  }

  anteriorPaso() {
    this.nextPage = 1;
  }

  registrar() {
    // Guardamos el usuario y la contraseña en localStorage
    localStorage.setItem('user', this.user);
    localStorage.setItem('password', this.password);
    alert('Usuario registrado correctamente');
    this.router.navigate(['/login']);
  }

  inicio() {
    this.router.navigate(['/login']);
  }
}
