import { Injectable } from '@nestjs/common';
import { CreateUsuarioRolDto } from './dto/create-usuario-rol.dto';
import { UpdateUsuarioRolDto } from './dto/update-usuario-rol.dto';
import { UsuarioRepository } from './repository/usuario.repository';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { EditarUsuarioDto } from './dto/editar-info.dto';

@Injectable()
export class UsuarioRolService {
  constructor(private readonly UsuarioRolService: UsuarioRepository) {}

  async crearUsuario(bodyUsuario:CreateUsuarioDto, file:Express.Multer.File = null){
    return this.UsuarioRolService.crearUsuario(bodyUsuario, file);
  }

  async usuarioToRol(){
    return this.UsuarioRolService.getUserRole();
  }

  async editarUsuario(bodyUsuario:EditarUsuarioDto, file:Express.Multer.File = null){
    return this.UsuarioRolService.editarUsuario(bodyUsuario,file);
  }

  async addimages(file){
    await this.UsuarioRolService.addimages(file);
  }

}
