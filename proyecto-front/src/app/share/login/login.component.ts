import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserAuth } from '../interfaces/user-auth';
import { AllserviceService } from '../services/allservice.service';

export class CreateUsuarioDto {
  nombre!: string;

  apellido!: string;

  id_identificacion!: number;

  numero_identificacion!: number;

  correo!: string;

  usuario!: string;

  clave!: string;

  descripcion!: string;

  ciudad!: string;

  telefono!: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthService, private router: Router, private servicesAll: AllserviceService) {
    this.authService.inLogin = true;
    if (!!this.authService.localStorageUser) {
      //change this route when the new component is ready
      //this.router.navigate(['/admin']);
    }
  }
  cities: any[] = [];

  selectedCity: any;
  
  successLogin = false;
  menssageValidate = '';
  displayConfirm = false;
  displayusuario= false;
  usuarioNuevo = new CreateUsuarioDto();
  ngOnInit() {
    this.loginForm = new FormGroup({
      correo: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required),
    });
    this.servicesAll.gettipoIdentificacion().subscribe((resp:any) =>{
      this.cities = resp;
    })
  }

  onSubmit() {
    const authData: UserAuth = { ...this.loginForm.value };
    console.log(authData);
    
    this.authService.userAuth(authData).subscribe((resp)=>{

        console.log(resp);
        if(resp?.status == 202){
          this.displayConfirm = true;
          this.menssageValidate = 'Bienvenido!!';
          const { access_token, user } = resp;
          this.authService.localStorageToken = access_token;
          this.authService.localStorageUser = user;
          this.successLogin = true;  
          setTimeout(() => {
            this.displayConfirm = false;
            //change this route when the new component is ready
            this.router.navigate(['/admin-panel']);
          }, 1000);
        }else{
          this.menssageValidate = '';
          this.displayConfirm = true;
          this.menssageValidate = 'Te equivocaste de usuario o contraseña'
          setTimeout(() => {
            
            
            //change this route when the new component is ready
            //this.router.navigate(['/admin-panel']);
            this.displayConfirm = false;
          }, 1000);
        }
        
  
    });
}

registrar(){
  
  this.usuarioNuevo.id_identificacion = this.selectedCity['id'];
  console.log(this.usuarioNuevo);
  this.servicesAll.postCrearUsuario(this.usuarioNuevo).subscribe((resp) =>{

    if(resp.staus == 404){
      this.menssageValidate = 'El correo esta erroneo';
      this.displayConfirm = true;
      setTimeout(() => {
        this.displayConfirm = false;
      }, 2000);
    }else{
      this.displayusuario = false;
      console.log(resp);
      this.displayConfirm = true;
      setTimeout(() => {
        this.displayConfirm = false;
      }, 2000);
    }
    
    
  })
}
}
