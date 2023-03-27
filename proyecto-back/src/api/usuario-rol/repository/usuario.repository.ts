import { Injectable, HttpStatus } from '@nestjs/common';
import { DataSource, FindOptionsRelations, Repository } from 'typeorm';

import { UsuarioRol } from '../entities/usuario-rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto } from 'src/api/usuario/dto/create-usuario.dto';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioRolDto } from '../dto/create-usuario-rol.dto';
import { usuariosRoles } from '../dto/userWithRoles.dto';
import { EditarUsuarioDto } from '../dto/editar-info.dto';

@Injectable()
export class UsuarioRepository extends Repository<Usuario> {
  private readonly institutionRelations: FindOptionsRelations<Usuario> = {
    rol_object: true,
    
  };
  constructor(private dataSource: DataSource,
    @InjectRepository(UsuarioRol)
    public usuarioRolRepository: Repository<UsuarioRol>,) {
    super(Usuario, dataSource.createEntityManager());
  }

  async crearUsuario(bodyUsuario:CreateUsuarioDto){
    const usuariosExistentes = await this.find()
    let usuarioNuevo: Usuario;
    const resultadoFilter = await usuariosExistentes.filter((resp) => resp.correo == bodyUsuario.correo || resp.usuario == bodyUsuario.usuario);

    if(resultadoFilter.length == 0){
      const saltOrRounds = 10;
      bodyUsuario.clave = await bcrypt.hash(bodyUsuario.clave, saltOrRounds);
      usuarioNuevo = await this.save(bodyUsuario);
      const badiUsuarioRol: CreateUsuarioRolDto = new CreateUsuarioRolDto();
      badiUsuarioRol.id_rol = 1;
      badiUsuarioRol.id_usuario = usuarioNuevo.id;
      const aux = await this.usuarioRolRepository.save(badiUsuarioRol);
      usuarioNuevo = await this.findOne({
        where:{
          id: usuarioNuevo.id
        },
        relations: this.institutionRelations,
      })

      return {
        status: HttpStatus.ACCEPTED,
        response: usuarioNuevo
      };
    }else {
      return {
        Error:'El usuario o el correo ya existe',
        status: 405
      }
    }

   }

   async getUserPermissions(user: number): Promise<string[] | undefined> {
    const permissions_result: any = await this.query(
      'call getUsuariosPermisos(?)',
      [user],
    );

    let permissions: string[] = [];

    if (permissions_result[0]?.constructor.name === Array.name) {
      permissions = permissions_result[0]
        .map((rdp) => rdp.permission_route as string)
        .filter((p) => p);
    }

    return permissions.length == 0 ? undefined : permissions;
  }

  async getUserRole(){
    let users:usuariosRoles[] = await this.query(`
    SELECT u.id, u.nombre, u.apellido, u.usuario, u.correo, i.nombre as 'tipo_documento', 
    u.numero_identificacion, r.descripcion as 'rol', u.descripcion,u.ciudad,u.telefono  from usuario_rol ur
    left join usuario u on ur.id_usuario = u.id
    LEFT join rol r on ur.id_rol = r.id 
    left join identificacion i on u.id_identificacion = i.id 
    where u.activo = true;`)

    for(let i in users){
      users[i].permisos = await this.getUserPermissions(users[i].id);
    }
    
    return users;
  }

  async editarUsuario(bodyEdit:EditarUsuarioDto){
    if(bodyEdit.id != null ){

      const editUsuario = await this.update(bodyEdit.id, bodyEdit);

      return {
        status: 200,
        reponse : editUsuario
      }

    }else{
      return {
        Error: 'Ingresa el id del usuario',
        status: 402
      }
    }
  }

}
