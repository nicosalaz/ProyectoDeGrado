import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { UsuarioRepository } from './repositories/usuario.repository';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioRolDto } from './dto/create-usuario-rol.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usersRepository: UsuarioRepository,
    
  ) {}

  

  async getUserPermissions(user: Usuario): Promise<string[] | undefined> {
    const permissions_result: any = await this.usersRepository.query(
      'call getUsuariosPermisos(?)',
      [user.id],
    );

    let permissions: string[] = [];

    if (permissions_result[0]?.constructor.name === Array.name) {
      permissions = permissions_result[0]
        .map((rdp) => rdp.permission_route as string)
        .filter((p) => p);
    }

    return permissions.length == 0 ? undefined : permissions;
  }

  async findOneByEmail(correo: string, isService = true): Promise<Usuario> {
    const user: Usuario = await this.usersRepository.findOneBy({ correo });
    if (user) {
      user.permissions = await this.getUserPermissions(user);
      user.rol = await this.findNombreRol(user.id);
    }

    if (isService) {
      delete user.clave;
    }

    return user;
  }

  async findOneByUsername(usuario: string, isService = false): Promise<Usuario> {
    const user: Usuario = await this.usersRepository.findOneBy({ usuario });
    if (user) {
      user.permissions = await this.getUserPermissions(user);
      user.rol = await this.findNombreRol(user.id);
    }

    if (isService) {
      delete user.clave;
    }

    return user;
  }

  async findNombreRol(userId:number){
    const userRole = await this.usersRepository.query(`select r.descripcion from usuario u 
    left join usuario_rol ur on ur.id_usuario = u.id 
    left join rol r on r.id = ur.id_rol 
    WHERE u.id = ?`, [userId])

    return userRole[0]['descripcion'];
  }


  async crearUsuario(bodyUsuario:CreateUsuarioDto){
    const usuariosExistentes = await this.usersRepository.find()
    let usuarioNuevo: Usuario;
    const resultadoFilter = await usuariosExistentes.filter((resp) => resp.correo == bodyUsuario.correo || resp.usuario == bodyUsuario.usuario);

    if(resultadoFilter.length == 0){
      const saltOrRounds = 10;
      bodyUsuario.clave = await bcrypt.hash(bodyUsuario.clave, saltOrRounds);
      usuarioNuevo = await this.usersRepository.save(bodyUsuario);
      const badiUsuarioRol: CreateUsuarioRolDto = new CreateUsuarioRolDto();
      badiUsuarioRol.id_rol = 1;
      badiUsuarioRol.id_usuario = usuarioNuevo.id;
      const aux = this.usersRepository.usuarioRolRepository.save(badiUsuarioRol);
      return aux;
    }
    
    return usuarioNuevo
   }

  
}
