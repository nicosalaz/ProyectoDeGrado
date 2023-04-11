import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { UsuarioRol } from '../entities/usuario-rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';

@Injectable()
export class UsuarioRepository extends Repository<Usuario> {
  constructor(private dataSource: DataSource,
    @InjectRepository(UsuarioRol)
    public usuarioRolRepository: Repository<UsuarioRol>,) {
    super(Usuario, dataSource.createEntityManager());
  }

   
}
