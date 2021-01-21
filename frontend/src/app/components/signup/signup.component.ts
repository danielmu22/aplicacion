import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: '',
    passwordveri: ''
  }

  constructor( private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private'])
        },
        err => console.log(err)
      )


/*
    var email = this.user.email;
    var password;

    //VALIDAR EMAIL

    var isEmail = function (str) {
      return typeof str === 'string' && /^[\w+\d+._]+\@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/.test(str);
    }

    if ((isEmail(email)) == true) {
      console.log("Es un correo valido");
    }

    //COMPROBAR QUE SON IGUALES
    if (this.user.password == this.user.passwordveri) {
      alert("Las contraseñas son iguales");

      password = this.user.password;

      //COMPROBAR QUE NO ESTAN VACIAS
      if (this.user.password.length == 0 || this.user.passwordveri.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
        return false;
      }

      //COMPROBAR QUE NO HAY ESPACIOS EN BLANCO
      var espacios = false;
      var cont = 0;

      while (!espacios && (cont < this.user.password.length)) {
        if (password.charAt(cont) == " ")
          espacios = true;
        cont++;
      }
      if (espacios) {
        alert("La contraseña no puede contener espacios en blanco");
        return false;
      }



    } else {
      alert("No has escrito las mismas contraseñas");
    }   
*/

  }

}
