import { Injectable } from '@nestjs/common';
import { CreateUsuarioRolDto } from './dto/create-usuario-rol.dto';
import { UpdateUsuarioRolDto } from './dto/update-usuario-rol.dto';
import { UsuarioRepository } from './repository/usuario.repository';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { EditarUsuarioDto } from './dto/editar-info.dto';

@Injectable()
export class UsuarioRolService {
  constructor(private readonly UsuarioRolService: UsuarioRepository) {}

  async crearUsuario(bodyUsuario:CreateUsuarioDto){
    return this.UsuarioRolService.crearUsuario(bodyUsuario);
  }

  async usuarioToRol(){
    return this.UsuarioRolService.getUserRole();
  }

  async editarUsuario(bodyUsuario:EditarUsuarioDto){
    return this.UsuarioRolService.editarUsuario(bodyUsuario);
  }
}
