import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Usuario } from 'src/api/usuario/entities/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/api/usuario/usuario.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    
    private jwtService: JwtService,
    private usersService: UsuarioService,
  ) {}

  async validationUsuario(bodyRquest:any){
    const user: Usuario =
      (await this.usersService.findOneByEmail(bodyRquest.correo, false)) ??
      (await this.usersService.findOneByUsername(bodyRquest.correo, false));

   if(user == null){
    return {
      status: false
    }
   }else{
    const isMatch = await bcrypt.compare(bodyRquest.clave, user.clave);
    if(isMatch){
      return {
        status:true,
        users: user
      };
    }else{
      return {
        status: false
      };
    }
   }

   
    
  }

  async login(user: any) {

    const validationUser = await this.validationUsuario(user);
    if(validationUser.status == true){
      delete validationUser.users.clave
      const payload = {
          login: validationUser.users.correo,
          sub: validationUser.users.id,
          permissions: validationUser.users.permissions,
        };
      
        return {
          status:HttpStatus.ACCEPTED,
          access_token: this.jwtService.sign(payload),
          user: {
            username: validationUser.users.usuario,
            name: `${validationUser.users.nombre} ${validationUser.users.apellido}`,
            permissions: validationUser.users.permissions,
            email: validationUser.users.correo,
            id: validationUser.users.id,
            rol: validationUser.users.rol,
            descripcion: validationUser.users.descripcion,
            numero:validationUser.users.telefono,
            ciudad:validationUser.users.ciudad
          },
        };
    }
    else{
      return new HttpException(
        'Invalid credentials. Please check the provided login data and try again.',
        HttpStatus.UNAUTHORIZED,
      ); 
    }
     
    
  }
}
