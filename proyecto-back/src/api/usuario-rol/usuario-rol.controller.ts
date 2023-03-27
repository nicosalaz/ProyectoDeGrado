import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UsuarioRolService } from './usuario-rol.service';
import { CreateUsuarioRolDto } from './dto/create-usuario-rol.dto';
import { UpdateUsuarioRolDto } from './dto/update-usuario-rol.dto';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { EditarUsuarioDto } from './dto/editar-info.dto';

@Controller()
export class UsuarioRolController {
  constructor(private readonly usuarioRolService: UsuarioRolService) {}

  @Post('create')
  async crearNuevoUsuario(@Body() nuevoUsuariodto: CreateUsuarioDto){
    for(let i in nuevoUsuariodto){
      if(nuevoUsuariodto[i] == "" || nuevoUsuariodto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    if(this.isEmail(nuevoUsuariodto.correo)==false){
      return {
        ERROR: 'Debe ser un correo.',
        status: HttpStatus.BAD_REQUEST
      }
    }

    return this.usuarioRolService.crearUsuario(nuevoUsuariodto)
  }

 @Get('users')
  async usuariosToRoles(){
    return this.usuarioRolService.usuarioToRol()
  }

  isEmail(email: string) {
    let checkEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (checkEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  @Post('editar')
  async editarUsuario(@Body() nuevoUsuariodto: EditarUsuarioDto){
    for(let i in nuevoUsuariodto){
      if(nuevoUsuariodto[i] == "" || nuevoUsuariodto[i] == null){
        return {
          ERROR: 'Todos los campos son obligatorios.',
          status: HttpStatus.BAD_REQUEST
        }
      }
    }
    return this.usuarioRolService.editarUsuario(nuevoUsuariodto)
  }
}
