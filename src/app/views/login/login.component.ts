import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  private router = inject(Router);

  //variable de prueba de usuario y contraseña
  user: string = 'usuario'
  password: string = 'prueba123'

  accFlag: boolean = false;

  ngOnInit(): void {
  }  

  login(): void {
  const userText = (document.getElementById("userText") as HTMLInputElement).value;
  const passText = (document.getElementById("passText") as HTMLInputElement).value;

  if(userText == 'usuario' && passText == 'prueba123'){
    alert("credenciales correctas")
    this.accFlag = true;
    this.acceso(this.accFlag);
  } else {
    alert("credenciales incorrectas")
  }
}


  acceso(accUser: boolean){
    if(accUser == true){
      this.router.navigate(['/dashboard'])
    }
  }

  

  showPassword = false;

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  btnRegister(){
    this.router.navigate(['/register']);
  }

}
